import React from 'react';
import product1 from '../assets/images/ecommerce/product-table-1.png';
import product2 from '../assets/images/ecommerce/product-table-2.png';
import product3 from '../assets/images/ecommerce/product-table-3.png';
import product4 from '../assets/images/ecommerce/product-table-4.png';
import product5 from '../assets/images/ecommerce/product-table-5.png';
import product6 from '../assets/images/ecommerce/product-table-6.png';

export const productData = [
    {
        image: <img src={product1} style={{ width: 50, height: 50 }} alt="" />,
        product_name: "Red Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$10",
        stock: <div className='font-success'>In Stock</div>,
        start_date: "2011/4/19",
        action:<div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
        <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
        </div>
        
    },
    {
        image: <img src={product2} style={{ width: 50, height: 50 }} alt="" />,
        product_name: "Red Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$10",
        stock: <div className='font-danger'>Out of Stock</div>,
        start_date: "2011/4/19",
        action:<div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
        <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
        </div>
    },
    {
        image: <img src={product3} style={{ width: 50, height: 50 }} alt="" />,
        product_name: "Red Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$10",
        stock: <div className='font-danger'>Out of Stock</div>,
        start_date: "2011/4/19",
        action:<div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
        <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
        </div>
    },
    {
        image: <img src={product4} style={{ width: 50, height: 50 }} alt="" />,
        product_name: "Red Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$20",
        stock: <div className='font-primary'>Low Stock</div>,
        start_date: "2011/4/19",
        action:<div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
        <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
        </div>
    },
    {
        image: <img src={product5} style={{ width: 50, height: 50 }} alt="" />,
        product_name: "Red Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$30",
        stock: <div className='font-success'>In Stock</div>,
        start_date: "2011/4/19",
        action:<div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
        <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
        </div>
    },
    {
        image: <img src={product6} style={{ width: 50, height: 50 }} alt="" />,
        product_name: "Brown Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$40",
        stock: <div className='font-success'>In Stock</div>,
        start_date: "2011/4/19",
        action:<div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
        <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
        </div>
    },
    {
        image: <img src={product1} style={{ width: 50, height: 50 }} alt="" />,
        product_name: "Red Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$10",
        stock: <div className='font-success'>In Stock</div>,
        start_date: "2011/4/19",
        action:<div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
        <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
        </div>
    },
    {
        image: <img src={product2} style={{ width: 50, height: 50 }} alt="" />,
        product_name: "Red Lipstick",
        product_desc: "Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens",
        amount: "$10",
        stock: <div className='font-success'>In Stock</div>,
        start_date: "2011/4/19",
        action:<div><span><i className="fa fa-trash" style={{ width: 35, fontSize: 16, padding: 11, color: '#e4566e' }}></i></span>
        <span><i className="fa fa-pencil" style={{ width: 35, fontSize: 16, padding: 11, color: 'rgb(40, 167, 69)' }}></i></span>
        </div>
    }
]
export const productColumns = [
    {
        name:"Image",
        selector: 'image',
        sortable: true,
        center:true,
      },
      {
        name:"Product_Name",
        selector: 'product_name',
        sortable: true,
        center:true,
      },
      {
        name:"Product_desc",
        selector: 'product_desc',
        sortable: true,
        center:true,
      },
      {
        name:"Amount",
        selector: 'amount',
        sortable: true,
        center:true,
      },
      {
        name:"Stock",
        selector: 'stock',
        sortable: true,
        center:true,
      },
      {
        name:"Start_date",
        selector: 'start_date',
        sortable: true,
        center:true,
      },
      {
        name:"Action",
        selector: 'action',
        sortable: true,
        center:true,
      },
];