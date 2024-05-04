const Category = require('../../models/category')
const ProductSeller = require('../../models/productSeller')
const ProductBuyer = require('../../models/productBuyer')

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


exports.initialData = async (req, res) => {

    const categories = await Category.find({}).exec();
    const productsSeller = await ProductSeller.find({})
                                        .select('_id name price slug specifications description shippingCost productPictures verify category createBy')
                                        .populate({ path: 'category', select: '_id name'})
                                        .exec();
    const ProductBuyer = await ProductSeller.find({})
                                        .select('_id name price slug specifications description shippingCost productPictures verify category createBy')
                                        .populate({ path: 'category', select: '_id name'})
                                        .exec();
    res.status(200).json({
        categories: createCategories(categories),
        productsSeller
    })

}