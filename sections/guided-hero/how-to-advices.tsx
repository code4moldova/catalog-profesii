import Image from 'next/image';
import React from 'react';
import { Column, Row } from '../../components/grid';
import { howToUseGuidedDataArray, howToUseGuidedData } from './type';
import './index.css';

const HowToAdvices: React.FC<howToUseGuidedDataArray> = ({ data }) => {
  return (
    <Row>
      {data.map((item: howToUseGuidedData, index: number) => (
        <Column className="mx-auto w-full sm:w-1/2 md:w-1/3 mt-12" key={index}>
          {/* <Image
            src={item.image}
            alt={item.image_alt}
            className="mx-auto mb-6"
          /> */}

          <span className="mt-7 font-light text-sm w-2">{item.title}</span>
          {item.list_type === 'ordered' ? (
            <ol className="mt-7">
              {item.list_items.map((item, index) => (
                <li className="flex items-center mb-3" key={index}>
                  <div className="w-6 h-6 mr-4 rounded-full flex items-center justify-center border-2 bg-white text-blue-500 border-blue-500">
                    <span className="text-center">{index + 1}</span>
                  </div>
                  {item}
                </li>
              ))}
            </ol>
          ) : (
            <ul>
              {item.list_items.map((item) => (
                <li
                  className={
                    index === 2
                      ? 'flex items-start m-0 p-0 mb-3 mt-7'
                      : 'flex items-center m-0 p-0 mb-3 mt-7'
                  }
                  key={index}
                >
                  <div
                    className={
                      index === 2
                        ? 'w-2 h-2 mr-4 bg-blue-500 rounded-full mt-2'
                        : 'w-2 h-2 mr-4 bg-blue-500 rounded-full'
                    }
                  ></div>
                  <span className="w-48">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </Column>
      ))}
    </Row>
  );
};

export default HowToAdvices;
