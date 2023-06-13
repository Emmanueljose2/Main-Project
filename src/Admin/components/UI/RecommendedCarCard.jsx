import React from 'react'

export default function RecommendedCarCard(props) {
    const {carname,retweet,imgUrl,rentprice,percentage}=props.item
  return (
    <div className="recommend_car-card">
            <div className="recommend_car-top">
              <h5>
                <span>
                  <i class="ri-refresh-line"></i>
                </span>
                {percentage} % recomended
              </h5>
              <img src={imgUrl} alt="" />
            </div>
            <div className="recommend_car-bottom">
              <h4>{carname}</h4>
              <div className="recommend_car-other">
                <div className="recommend_car-icon">
                  <p>
                    <span>
                      <i class="ri-repeat-fill"></i>
                    </span>
                    {retweet}
                  </p>
                  <p>
                    <span>
                      <i class="ri-timer-flash-fill"></i>
                    </span>
                    130k
                  </p>
                </div>
                <span>{rentprice}</span>
              </div>
            </div>
          </div>
  )
}
