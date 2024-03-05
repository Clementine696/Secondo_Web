import React from "react";

import "./index.css";
import { Link } from "react-router-dom";

function Sidemenu() {
  return (
    <div className="profile-sidebar">
      <ul className="nav-profile-sidebar kanit-paragraphtextMedium">
        <li className="menu-sidebar">
          <Link className="link-menu" to="#privacy">
            <div className="icon-menu-sidebar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
              >
                <path
                  d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                  stroke="#00243D"
                  stroke-width="2"
                />
                <path
                  d="M17 16.5C17 18.985 17 21 9 21C1 21 1 18.985 1 16.5C1 14.015 4.582 12 9 12C13.418 12 17 14.015 17 16.5Z"
                  stroke="#00243D"
                  stroke-width="2"
                />
              </svg>
            </div>
            ข้อมูลส่วนตัว
          </Link>
        </li>
        <li className="menu-sidebar">
          <Link className="link-menu" to="#buy">
            <div className="icon-menu-sidebar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M1 5.5H19L18 19H2L1 5.5Z"
                  stroke="#00243D"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 8V1H14V8"
                  stroke="#00243D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 15H14"
                  stroke="#00243D"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            การซื้อของฉัน
          </Link>
        </li>
        <li className="menu-sidebar">
          <Link className="link-menu" to="#">
            <div className="icon-menu-sidebar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.25 21.4C13.8667 21.7833 13.3917 21.975 12.825 21.975C12.2583 21.975 11.7833 21.7833 11.4 21.4L2.60001 12.6C2.41667 12.4167 2.27067 12.2 2.16201 11.95C2.05334 11.7 1.99934 11.4333 2.00001 11.15V4C2.00001 3.45 2.19601 2.97933 2.58801 2.588C2.98001 2.19667 3.45067 2.00067 4.00001 2H11.15C11.4333 2 11.7 2.05433 11.95 2.163C12.2 2.27167 12.4167 2.41733 12.6 2.6L21.4 11.425C21.7833 11.8083 21.975 12.2793 21.975 12.838C21.975 13.3967 21.7833 13.8673 21.4 14.25L14.25 21.4ZM12.825 20L19.975 12.85L11.15 4H4.00001V11.15L12.825 20ZM6.50001 8C6.91667 8 7.27101 7.85433 7.56301 7.563C7.85501 7.27167 8.00067 6.91733 8.00001 6.5C8.00001 6.08333 7.85434 5.72933 7.56301 5.438C7.27167 5.14667 6.91734 5.00067 6.50001 5C6.08334 5 5.72934 5.146 5.43801 5.438C5.14667 5.73 5.00067 6.084 5.00001 6.5C5.00001 6.91667 5.14601 7.271 5.43801 7.563C5.73001 7.855 6.08401 8.00067 6.50001 8Z"
                  fill="#00243D"
                />
              </svg>
            </div>
            การขายของฉัน
          </Link>
        </li>
        <li className="menu-sidebar">
          <Link className="link-menu" to="#">
            <div className="icon-menu-sidebar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 15.7241H17C18 15.7241 16.25 13.5227 15.13 13.1172L9.29878 11.015C9.08124 10.9366 8.85175 10.8965 8.62051 10.8965H3C1.89543 10.8965 1 11.7919 1 12.8965V19.5172C1 20.6217 1.89543 21.5172 3 21.5172H5.51536C6.17202 21.5172 6.55416 20.6089 7 20.1268C7.40399 19.69 11.7249 21.1819 13.3695 21.7709C13.7802 21.918 14.226 21.9317 14.6437 21.8057L21.0756 19.865C21.6245 19.6994 22 19.1939 22 18.6206C22 17.0179 20.66 15.7241 19 15.7241ZM5 18.5861C5 19.1384 4.55228 19.5861 4 19.5861C3.44772 19.5861 3 19.1384 3 18.5861V13.8275C3 13.2752 3.44772 12.8275 4 12.8275C4.55228 12.8275 5 13.2752 5 13.8275V18.5861ZM14.5103 19.8201C14.157 19.926 13.7813 19.9321 13.4248 19.8377L8.48844 18.5317C7.61108 18.2995 7 17.5058 7 16.5982V14.1983C7 13.4412 7.61372 12.8275 8.37078 12.8275C8.52906 12.8275 8.68615 12.8549 8.83508 12.9085L14.43 14.9227C14.9684 15.1215 14.5273 15.7133 13.954 15.6875C13.4189 15.6633 12.8492 15.6273 12.7 15.5792L11.2245 15.1064C10.722 14.9453 10.1829 15.2157 10.0115 15.7148C9.83503 16.2287 10.1152 16.7872 10.6326 16.9531L12.07 17.4137C12.58 17.5779 13.11 17.6551 13.65 17.6551H19C19.5787 17.6551 19.3919 18.3577 18.8376 18.5237L14.5103 19.8201Z"
                  fill="#00243D"
                />
                <path
                  d="M18.624 3.2651C18.7847 3.09536 19.0027 3 19.23 3C19.4573 3 19.6753 3.09536 19.836 3.2651L22.749 6.35877C22.9097 6.52856 23 6.75882 23 6.99891C23 7.23899 22.9097 7.46925 22.749 7.63904L19.8256 10.7458C19.6639 10.9108 19.4474 11.002 19.2227 11C18.9979 10.9979 18.7829 10.9027 18.624 10.7348C18.4651 10.5669 18.3749 10.3398 18.373 10.1024C18.371 9.86504 18.4574 9.63632 18.6136 9.46556L20.0001 8H11.8572C11.6298 8 11.4118 7.80894 11.2511 7.63914C11.0903 7.46933 11 7.23904 11 6.99891C11 6.75877 11.0903 6.435 11.2511 6.26519C11.4118 6.09539 11.6298 6 11.8572 6H20.0001L18.624 4.54538C18.4633 4.37558 18.373 4.14532 18.373 3.90524C18.373 3.66515 18.4633 3.43489 18.624 3.2651Z"
                  fill="#00243D"
                />
              </svg>
            </div>
            การบริจาคของฉัน
          </Link>
        </li>
        <li className="menu-sidebar">
          <Link className="link-menu" to="#">
            <div className="icon-menu-sidebar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
              >
                <path
                  d="M14.7349 5.62596C14.9046 5.7867 15 6.00468 15 6.23197C15 6.45925 14.9046 6.67724 14.7349 6.83798L11.6412 9.75099C11.4714 9.91168 11.2412 10.002 11.0011 10.002C10.761 10.002 10.5308 9.91168 10.361 9.75099L7.25416 6.82753C7.08923 6.66587 6.99797 6.44935 7.00003 6.22461C7.0021 5.99987 7.09732 5.78488 7.26519 5.62596C7.43307 5.46703 7.66016 5.37689 7.89756 5.37493C8.13496 5.37298 8.36368 5.45938 8.53444 5.61552L10 7.00209V0.859109C10 0.631777 10.1911 0.413756 10.3609 0.253008C10.5307 0.0922604 10.761 0.00195312 11.0011 0.00195312C11.2412 0.00195312 11.565 0.0922604 11.7348 0.253008C11.9046 0.413756 12 0.631777 12 0.859109L12 7.00209L13.4546 5.62596C13.6244 5.46527 13.8547 5.37499 14.0948 5.37499C14.3349 5.37499 14.5651 5.46527 14.7349 5.62596Z"
                  fill="#00243D"
                />
                <path
                  d="M17 18L20.824 14.176C20.9366 14.0636 20.9999 13.9111 21 13.752V8.5C21 8.10218 20.842 7.72064 20.5607 7.43934C20.2794 7.15804 19.8978 7 19.5 7C19.1022 7 18.7206 7.15804 18.4393 7.43934C18.158 7.72064 18 8.10218 18 8.5V13"
                  stroke="#00243D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 14L17.858 13.142C17.9031 13.097 17.9388 13.0435 17.9632 12.9847C17.9876 12.9258 18.0001 12.8627 18 12.799C17.9999 12.7091 17.9747 12.621 17.9274 12.5445C17.8801 12.468 17.8124 12.4062 17.732 12.366L17.289 12.145C16.9137 11.9573 16.4889 11.8925 16.0747 11.9596C15.6604 12.0267 15.2778 12.2224 14.981 12.519L14.086 13.414C13.7109 13.789 13.5001 14.2976 13.5 14.828V18M5 18L1.176 14.176C1.06345 14.0636 1.00014 13.9111 1 13.752V8.5C1 8.10218 1.15804 7.72064 1.43934 7.43934C1.72064 7.15804 2.10218 7 2.5 7C2.89782 7 3.27936 7.15804 3.56066 7.43934C3.84196 7.72064 4 8.10218 4 8.5V13"
                  stroke="#00243D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 13.9997L4.142 13.1417C4.09697 13.0967 4.06125 13.0432 4.03688 12.9844C4.01252 12.9255 3.99999 12.8624 4 12.7987C4 12.6157 4.104 12.4487 4.268 12.3657L4.711 12.1447C5.08631 11.9571 5.51114 11.8922 5.92534 11.9593C6.33955 12.0265 6.72216 12.2222 7.019 12.5187L7.914 13.4137C8.2891 13.7887 8.49989 14.2974 8.5 14.8277V17.9997"
                  stroke="#00243D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            ขอรับบริจาคของฉัน
          </Link>
        </li>
        <li className="menu-sidebar">
          <Link className="link-menu" to="#">
            <div className="icon-menu-sidebar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
              >
                <path
                  d="M16 4V8.5C15.2979 8.49919 14.6035 8.64663 13.9623 8.93269C13.321 9.21875 12.7474 9.63697 12.279 10.16C11.4539 11.0766 10.9982 12.2667 11 13.5C11.0003 14.385 11.2353 15.2541 11.6809 16.0187C12.1266 16.7833 12.7671 17.4161 13.537 17.8525C12.206 18.255 10.439 18.5 8.5 18.5C4.358 18.5 1 17.3805 1 16V4"
                  stroke="#00243D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 13.5C21 16.2615 18.7615 18.5 16 18.5C15.105 18.5 14.264 18.265 13.537 17.8525C12.7671 17.4161 12.1266 16.7833 11.6809 16.0187C11.2353 15.2541 11.0003 14.385 11 13.5C11 12.216 11.484 11.045 12.279 10.16C12.7474 9.63697 13.321 9.21875 13.9623 8.93269C14.6035 8.64663 15.2979 8.49919 16 8.5C18.7615 8.5 21 10.7385 21 13.5ZM16 4C16 5.3805 12.642 6.5 8.5 6.5C4.358 6.5 1 5.3805 1 4C1 2.6195 4.358 1.5 8.5 1.5C12.642 1.5 16 2.6195 16 4Z"
                  stroke="#00243D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 12C1 13.3805 4.358 14.5 8.5 14.5C9.4035 14.5 10.27 14.447 11.072 14.349M1 8C1 9.3805 4.358 10.5 8.5 10.5C9.878 10.5 11.1695 10.376 12.279 10.16M17.5 12L14.5 15"
                  stroke="#00243D"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            การประมูลของฉัน
          </Link>
        </li>
        <li className="menu-sidebar">
          <Link className="link-menu" to="#">
            <div className="icon-menu-sidebar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.28571 6C3.67951 6 3.09812 6.24082 2.66947 6.66947C2.24082 7.09812 2 7.6795 2 8.28571V15.1429C2 15.7491 2.24082 16.3304 2.66947 16.7591C3.09812 17.1878 3.67951 17.4286 4.28571 17.4286H6.57143C6.57143 17.4286 7.71429 17.4286 7.71429 16.2857C7.71429 15.1429 6.57143 15.1429 6.57143 15.1429H4.85714C4.54155 15.1429 4.28571 14.887 4.28571 14.5714V8.85714C4.28571 8.54155 4.54155 8.28571 4.85714 8.28571H6.57143C6.57143 8.28571 7.71429 8.28571 7.71429 7.14286C7.71429 6 6.57143 6 6.57143 6H4.28571ZM11.1429 6C10.5366 6 9.95527 6.24082 9.52661 6.66947C9.09796 7.09812 8.85714 7.6795 8.85714 8.28571V15.1429C8.85714 15.7491 9.09796 16.3304 9.52661 16.7591C9.95527 17.1878 10.5366 17.4286 11.1429 17.4286H13.4286C14.0348 17.4286 14.6162 17.1878 15.0448 16.7591C15.4735 16.3304 15.7143 15.7491 15.7143 15.1429V8.28571C15.7143 7.6795 15.4735 7.09812 15.0448 6.66947C14.6162 6.24082 14.0348 6 13.4286 6H11.1429ZM11.1429 8.85714C11.1429 8.54155 11.3987 8.28571 11.7143 8.28571H12.8571C13.1727 8.28571 13.4286 8.54155 13.4286 8.85714V14.5714C13.4286 14.887 13.1727 15.1429 12.8571 15.1429H11.7143C11.3987 15.1429 11.1429 14.887 11.1429 14.5714V8.85714ZM17.4286 10C17.4286 10 16.8571 10 16.8571 10.8571C16.8571 11.7143 17.4286 11.7143 17.4286 11.7143H19.7143C20.0299 11.7143 20.2857 11.9701 20.2857 12.2857V12.8571C20.2857 13.1727 20.0299 13.4286 19.7143 13.4286H18.5714C18.1168 13.4286 17.6807 13.6092 17.3592 13.9307C17.0378 14.2522 16.8571 14.6882 16.8571 15.1429V18C16.8571 18.3156 17.113 18.5714 17.4286 18.5714H21.4286C21.4286 18.5714 22 18.5714 22 17.7143C22 16.8571 21.4286 16.8571 21.4286 16.8571H19.1429C18.8273 16.8571 18.5714 16.6013 18.5714 16.2857V15.7143C18.5714 15.3987 18.8273 15.1429 19.1429 15.1429H20.2857C20.7404 15.1429 21.1764 14.9622 21.4979 14.6408C21.8194 14.3193 22 13.8832 22 13.4286V11.7143C22 11.2596 21.8194 10.8236 21.4979 10.5021C21.1764 10.1806 20.7404 10 20.2857 10H17.4286Z"
                  fill="#00243D"
                />
              </svg>
            </div>
            แต้มคะแนน Carbon credits
          </Link>
        </li>
        <li className="menu-sidebar">
          <Link className="link-menu" to="#">
            <div className="icon-menu-sidebar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
              >
                <path
                  d="M10 18C9.76667 18 9.52933 17.9576 9.288 17.8727C9.04667 17.7878 8.834 17.652 8.65 17.4653L6.925 15.8614C5.15833 14.215 3.56233 12.5815 2.137 10.9609C0.711667 9.34031 -0.000666199 7.55372 4.67508e-07 5.60113C4.67508e-07 4.00566 0.525001 2.67327 1.575 1.60396C2.625 0.534653 3.93333 0 5.5 0C6.38333 0 7.21667 0.190778 8 0.572334C8.78333 0.953889 9.45 1.47598 10 2.13861C10.55 1.47666 11.2167 0.954908 12 0.573352C12.7833 0.191796 13.6167 0.000678925 14.5 0C16.0667 0 17.375 0.534653 18.425 1.60396C19.475 2.67327 20 4.00566 20 5.60113C20 7.55304 19.2917 9.3437 17.875 10.9731C16.4583 12.6025 14.85 14.2405 13.05 15.8868L11.35 17.4653C11.1667 17.652 10.9543 17.7878 10.713 17.8727C10.4717 17.9576 10.234 18 10 18ZM9.05 4.17539C8.56667 3.47949 8.05 2.94891 7.5 2.58365C6.95 2.21839 6.28333 2.0361 5.5 2.03677C4.5 2.03677 3.66667 2.37624 3 3.05516C2.33333 3.73409 2 4.58274 2 5.60113C2 6.48373 2.30833 7.42167 2.925 8.41494C3.54167 9.4082 4.27933 10.3713 5.138 11.3041C5.996 12.2376 6.87933 13.1117 7.788 13.9264C8.69667 14.7412 9.434 15.4116 10 15.9378C10.5667 15.4116 11.3043 14.7412 12.213 13.9264C13.1217 13.1117 14.005 12.2376 14.863 11.3041C15.721 10.3706 16.4583 9.40752 17.075 8.41494C17.6917 7.42235 18 6.48441 18 5.60113C18 4.58274 17.6667 3.73409 17 3.05516C16.3333 2.37624 15.5 2.03677 14.5 2.03677C13.7167 2.03677 13.05 2.21941 12.5 2.58467C11.95 2.94993 11.4333 3.48017 10.95 4.17539C10.8333 4.34512 10.6917 4.47242 10.525 4.55728C10.3583 4.64215 10.1833 4.68458 10 4.68458C9.81667 4.68458 9.64167 4.64215 9.475 4.55728C9.30833 4.47242 9.16667 4.34512 9.05 4.17539Z"
                  fill="#00243D"
                />
              </svg>
            </div>
            รายการโปรด
          </Link>
        </li>
        <li className="menu-sidebar">
          <Link className="link-menu" to="#">
            <div className="icon-menu-sidebar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.0067 1.55571C11.6223 1.21 12.3746 1.21451 12.9861 1.56757L20.6599 5.99868C21.2786 6.35596 21.6598 7.01617 21.6598 7.73065L21.6598 16.422C21.6598 17.1365 21.2787 17.7967 20.6599 18.154L13 22.5771C12.3811 22.9345 11.6186 22.9345 10.9997 22.5771L3.33974 18.154C2.72099 17.7967 2.33984 17.1365 2.33984 16.422V7.59326C2.33984 6.8702 2.73012 6.20344 3.36058 5.8494L11.0067 1.55571ZM12.9998 3.73183C12.381 3.37463 11.6187 3.37463 10.9999 3.73183L5.33993 6.99927C4.72108 7.35652 4.33984 8.0168 4.33984 8.73136V15.2678C4.33984 15.9824 4.72108 16.6427 5.33993 16.9999L10.9999 20.2674C11.6187 20.6246 12.381 20.6246 12.9998 20.2674L18.6598 16.9999C19.2786 16.6427 19.6598 15.9824 19.6598 15.2678V8.73136C19.6598 8.0168 19.2786 7.35652 18.6598 6.99926L12.9998 3.73183ZM11.9998 8.9996C11.2042 8.9996 10.4411 9.31567 9.87852 9.87828C9.31591 10.4409 8.99984 11.2039 8.99984 11.9996C8.99984 12.7952 9.31591 13.5583 9.87852 14.1209C10.4411 14.6835 11.2042 14.9996 11.9998 14.9996C12.7955 14.9996 13.5586 14.6835 14.1212 14.1209C14.6838 13.5583 14.9998 12.7952 14.9998 11.9996C14.9998 11.2039 14.6838 10.4409 14.1212 9.87828C13.5586 9.31567 12.7955 8.9996 11.9998 8.9996ZM6.99984 11.9996C6.99984 10.6735 7.52663 9.40175 8.46431 8.46406C9.40199 7.52638 10.6738 6.9996 11.9998 6.9996C13.3259 6.9996 14.5977 7.52638 15.5354 8.46406C16.4731 9.40175 16.9998 10.6735 16.9998 11.9996C16.9998 13.3257 16.4731 14.5975 15.5354 15.5351C14.5977 16.4728 13.3259 16.9996 11.9998 16.9996C10.6738 16.9996 9.40199 16.4728 8.46431 15.5351C7.52663 14.5975 6.99984 13.3257 6.99984 11.9996Z"
                  fill="#00243D"
                />
              </svg>
            </div>
            ตั้งค่า
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidemenu;