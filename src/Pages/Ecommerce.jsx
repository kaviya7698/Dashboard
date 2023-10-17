import React from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../Components';
import { earningData, medicalproBranding, ordersData, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../Data/dummy';
import { useStateContext } from '../Contexts/ContextProvider';
import product9 from '../Data/product9.jpg';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-1">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="flex flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-70 m-2  p-4 pt-4 rounded-2xl ">
              <div className='flex gap-4'>
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-5xl opacity-1.8 rounded-full  p-10 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <div className="mt-4">
                <p>
              <span className="text-sm text-gray-400">{item.title}</span><br/>
              <span className="text-lg font-bold">${item.amount}</span><br/>              
              <span className={`text-xs text-${item.pcColor}`}>
                {item.percentage>10 ?<AiOutlineArrowUp className='block'/>: <AiOutlineArrowDown className='block'/>}
                <span>{item.percentage}%</span>
                </span>
              <span className='text-xs'>this month</span>
              </p>
              </div> 
              </div>           
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center items-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-700  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Overview <br /><p className="dark:text-gray-400 text-xs">Monthly Earnings</p></p>
            
          </div>
          <div className=" mt-2 flex gap-10 flex-wrap">
            <div className='md:w-full overflow-auto'>
              <Stacked currentMode={currentMode} width="650px" height="260px" />
            </div>
          </div>         
        </div> 
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-4 m-3">           
        <div className="flex justify-between">
            <p className="font-semibold text-xl">Customers <br /><p className="dark:text-gray-400 text-xs">Customers that buy products</p></p>           
          </div>
          <div className=" mt-2 flex gap-10 flex-wrap">
            <div className='md:w-full overflow-auto'>
                <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="260px" width="280px" />
            </div>
          </div>             
          </div>      
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl md:w-full">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Product Sell</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="mt-10 md:w-full overflow-auto">
            <table>
                <tr className='text-sm items-center m-5 text-gray-400'>
                  <th style={{paddingLeft:'50px'}}>Product Name</th>
                  <th style={{paddingRight:'400px'}}></th>
                  <th style={{paddingRight:'50px'}}>Stock</th>
                  <th style={{paddingRight:'50px'}}>Price</th>
                  <th style={{paddingRight:'50px'}}>Customer Name</th>
                </tr>
              <tr className='w-full font-bold'></tr>
              <tbody>             
            {ordersData.map((item) => (
              <tr className="text-sm items-center" style={{padding:'7px'}}>
                  <td><img src={item.ProductImage} alt="" style={{width: '110px', height: '65px', borderRadius:'5px', margin:'10px'}}/></td>
                  <td style={{paddingRight:'400px', fontWeight:'bolder'}}>{item.OrderItems}</td>
                  <td style={{paddingRight:'50px'}}>{item.OrderID} in Stock</td>
                  <td style={{paddingRight:'50px', fontWeight:'bolder'}}>${item.TotalAmount}</td>
                  <td style={{paddingRight:'50px'}}>{item.CustomerName}</td>
                </tr>
            ))}
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;