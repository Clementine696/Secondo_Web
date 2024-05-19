const Category = require('../models/category');
const slugify = require('slugify');
const shortid = require('shortid');
const fs = require('fs');
const Coupon = require('../models/coupon');

function createCategories(categories, parentId = null){

    const categoryList = [];
    let category;
    if(parentId == null){
        category = categories.filter(cat => cat.parentId == undefined);
    }else{
        category = categories.filter(cat => cat.parentId == parentId);
    }

    for(let cate of category){
        categoryList.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            parentId: cate.parentId,
            image: cate.categoryImage,
            children: createCategories(categories, cate._id)
        });
    }
    
    return categoryList;
    // return "Yahoo";
};

exports.addCategory = (req, res) => {

    const categoryObj = {
        name: req.body.name,
        // slug: slugify(req.body.name)
        slug: `${slugify(req.body.name)}-${shortid.generate()}`
    }

    if(req.file){
        categoryObj.categoryImage = process.env.API + '/public/' + req.file.filename;
        console.log(req.file.filename);
    }
    
    if(req.body.parentId){
        categoryObj.parentId = req.body.parentId;
    }
    
    const cat = new Category(categoryObj);

    cat.save().then(category => {
        category === cat; // true
        // if(error) return res.status(400).json({ error })

        if(category){
            return res.status(201).json({ category });
        }

    }).catch((error) => {
        return res.status(400).json({ error })
        console.log(err);
        // res.send(400, "Bad Request");
    });
    
}

exports.getCategory = (req, res) => {
    Category.find({})
    .then((categories) => {
        // if(error) return res.status(400).json({ error })

        // fs.unlink("src/uploads/ZZZSOVA.jpg", (err => 
        //     { if (err) console.log(err);
        //         else {
        //             console.log("\nDeleted file");
        //         }
        //     }));

        if(categories){

            const categoryList = createCategories(categories);

            Coupon.find({})
                .then((coupons) => {
                    if(coupons){
                        return res.status(200).json({ categoryList, coupons });
                        // return res.status(200).json({ coupons });
                    }
                }).catch((error) => {
                    return res.status(400).json({ error })
                })

        }
        
    }).catch((error) => {
        console.log('ERROR HEREEEEEEEEEEEE');
        return res.status(400).json({ error })
        // console.log(err);
        // res.send(400, "Bad Request");
    })
}

exports.updateCategories = async (req, res) => {

    const {_id, name, parentId, type} = req.body;
    const updatedCategories = [];
    if(name instanceof Array){
        for(let i=0; i<name.length; i++){
            // console.log("UPDATE")
            // console.log(name[i], parentId[i])
            const category = {
                name: name[i],
                type: type[i]
            };
            // console.log()
            // if(parentId[i] === 'select category'){
            //     console.log("Get1")
            //     category.parentId = "";
            // }
            if(parentId[i] !== ""){
                category.parentId = parentId[i];
            }
            const updatedCategory = await Category.findOneAndUpdate({_id: _id[i]}, category, {new: true});
            updatedCategories.push(updatedCategory);
        }
        return res.status(201).json({ updatedCategories: updatedCategories });
    }else{
        const category = {
            name,
            type
        };
        if(parentId !== ""){
            category.parentId = parentId;
        }
        const updatedCategory = await Category.findOneAndUpdate({_id}, category, {new: true});
        return res.status(201).json({ updatedCategory });
    }

    // res.status(200).json({body: req.body});
}

exports.deleteCategories = async (req, res) => {
    const { ids } = req.body.payload;
    const deletedCategories = [];
    for(let i=0; i<ids.length; i++){
        const deleteCategory = await Category.findOneAndDelete({ _id: ids[i]._id})
        deletedCategories.push(deleteCategory);
    }
    console.log(deletedCategories)
    if(deletedCategories.length == ids.length){

        for(let i=0; i<deletedCategories.length; i++){
            if(deletedCategories[i].categoryImage != null){
                console.log(deletedCategories[i].categoryImage.split('/')[4])
                fs.unlink("src/uploads/" + deletedCategories[i].categoryImage.split('/')[4], (err => 
                    { if (err) console.log(err);
                        else {
                            console.log("\nDeleted file");
                        }
                    }));
                }
            }
        res.status(201).json({message: 'Categories removed'})
    }else{
        res.status(400).json({message: 'Something went worng'})
    }
    // res.status(200).json({body: req.body});
}

// fs.unlink("src/uploads/ZZZSOVA.jpg", (err => 
//     { if (err) console.log(err);
//         else {
//             console.log("\nDeleted file");
//         }
//     }));

exports.addCoupon = (req, res) => {

    const couponObj = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        // slug: slugify(req.body.name)
    }

    if(req.file){
        couponObj.couponImage = process.env.API + '/public/' + req.file.filename;
        console.log(req.file.filename);
    }
    
    // return res.status(201).json({ couponObj });
    const cat = new Coupon(couponObj);

    cat.save().then(coupon => {
        coupon === cat; // true
        // if(error) return res.status(400).json({ error })

        if(coupon){
            return res.status(201).json({ coupon });
        }

    }).catch((error) => {
        return res.status(400).json({ error })
        console.log(err);
        // res.send(400, "Bad Request");
    });
    
}

exports.getCoupon = (req, res) => {
    Coupon.find({})
    .then((coupons) => {
        if(coupons){
            return res.status(200).json({ coupons });
        }
    }).catch((error) => {
        return res.status(400).json({ error })
    })
}