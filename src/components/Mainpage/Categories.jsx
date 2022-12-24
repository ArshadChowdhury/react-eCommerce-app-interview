import React from 'react'

const Categories = () => {

    const categoryData =
        [
            {
                categoryImg: "../../src/assets/cat1.png",
                categoryName: "Fashion",
            },
            {
                categoryImg: "../../src/assets/cat2.png",
                categoryName: "Electronic",
            },
            {
                categoryImg: "../../src/assets/cat3.png",
                categoryName: "Cars",
            },
            {
                categoryImg: "../../src/assets/cat4.png",
                categoryName: "Home & Garden",
            },
            {
                categoryImg: "../../src/assets/cat5.png",
                categoryName: "Gifts",
            },
            {
                categoryImg: "../../src/assets/cat6.png",
                categoryName: "Music",
            },
            {
                categoryImg: "../../src/assets/cat7.png",
                categoryName: "Health & Beauty",
            },
            {
                categoryImg: "../../src/assets/cat8.png",
                categoryName: "Pets",
            },
            {
                categoryImg: "../../src/assets/cat9.png",
                categoryName: "Baby Toys",
            },
            {
                categoryImg: "../../src/assets/cat10.png",
                categoryName: "Groceries",
            },
            {
                categoryImg: "../../src/assets/cat11.png",
                categoryName: "Books",
            },
        ]

    return (
        <>
            <div className="category">{
                categoryData.map((category, index) => {
                    return (
                        <div className="box f_flex" key={index}>
                            <img src={category.categoryImg} alt="no img" />
                            <span>{category.categoryName}</span>
                        </div>
                    )
                })
            }</div>
        </>
    )
}

export default Categories