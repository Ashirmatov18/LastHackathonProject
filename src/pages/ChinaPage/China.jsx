import React from 'react'
import './China.css'
import ChinaList from '../../containers/ProductsLists/ChinaList/ChinaList'
import CarouselHome from './CarouselHome'

const China = () => {
    return (
        <>
        <div style={{background: 'url() ',
        zIndex: '0'}}>
            <div className='china-page'>
                <div className='main-image'>
                    {/* <div className='center-china'>
                    </div>
                    <h1>Изучите Китайский язык</h1> */}
                </div>
            </div>
            <div className='coffee-desc'>
                <div className='china-img2'>

                </div>
                <div className='desc-12'>
                    <p>从前，住着一个名叫卜子的人。

他平时很不讲究穿着，经常是穿着一身破烂的衣服就出去了。

有一天，他还是和平时一样穿着一条又脏又破的裤子出去了，走到街上，很多人都在看他的破裤子，他自己觉得很难堪，就买一块布头，回到家叫妻子给他做一条新裤子。

卜妻量量尺寸，问他：“这条裤子做成什么式样啊?”

卜子随口回答：“照老样子做吧！”

妻子以为丈夫喜欢那种又脏又破衣服的款式，就想：他是不是觉得穿这种裤子很舒服，而且这一条裤子不够穿，所以叫我再做一条？

卜妻就认认真真地仿照老裤子的模样，这里戳几个破洞，那里抹一摊油，弄得皱皱巴巴、破破烂烂的。花费了不少工夫，总算完成了。

她把裤子放到卜子面前，得意地说：“满意吧?同老裤子一样的样式。”

说话一定要说清楚，尤其是大事情。

.</p>
                </div>
            </div>
            <div className='coffee-desc'>
                <div className='desc-12'>
                    <p>昨日，有热心观众向本报提供线索，在南京路附近看到几名四十岁左右的男人，在半夜时候偷盗毁坏共享单车。他们鬼鬼祟祟的用锤子砸开车锁，然后迅速装进身旁的面包车。

根据热心观众线索，本报迅速与南京路派出所民警联系，在午夜时分的南京路部署警力蹲点。终于，在凌晨一点，看到四名男同志，毁坏共享单车车锁，并将车子装进备好的面包车内，人赃俱获。

之后，民警将犯罪嫌疑人带到派出所进行审讯，犯罪嫌疑人对犯罪事实供认不讳。借此，本报向广大群众呼吁，共享单车意在提供便捷设施服务大众，切不可财迷心窍，违法</p>
                </div>
                <div className='china-img3'>

                </div>
            </div>
            <div className='china-prod'>
                <h3>Лучшие преподователи китайского языка</h3>
                <ChinaList/>
                
            </div>
            {/* <CarouselHome/> */}
        </div>
        </>
    )
}

export default China