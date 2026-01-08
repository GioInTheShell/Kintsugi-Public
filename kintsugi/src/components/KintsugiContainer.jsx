import React from 'react'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'

const KintsugiContainer = () => {
  return (
    <header>
        <div className="flex">
            <Parallax pages={12} className='bg-radial-[at_25%_25%] from-yellow-600 to-yellow-900 to-75% object-scale-down'>
                        
                        <ParallaxLayer offset={0} className='object-scale-down z-60' sticky={{ start: 0, end: 12}}>
                            <img src='/kinbg.png' alt="kintsugi shards background" className='object-scale-down z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'/>
                        </ParallaxLayer>
                        <ParallaxLayer sticky={{ start: 1, end: 9}} className='object-scale-down z-50' >
                            <img src='/kin1.png' alt="kintsugi shard" className='object-scale-down'/>
                        </ParallaxLayer>
                            <ParallaxLayer sticky={{ start: 2, end: 7}} offset={0} className='object-scale-down z-60'>
                            <img src='/kin3.png' alt="kintsugi shard" className='object-scale-down'/>
                        </ParallaxLayer>
                        <ParallaxLayer sticky={{ start: 3, end: 6}} className='object-scale-down z-60' >
                            <img src='/kin7.png' alt="kintsugi shard" className='object-scale-down'/>
                        </ParallaxLayer>
                        <ParallaxLayer sticky={{ start: 4, end: 10}} className='object-scale-down z-60' >
                            <img src='/kin12.png' alt="kintsugi shard" className='object-scale-down'/>
                        </ParallaxLayer>
                            <ParallaxLayer sticky={{ start: 5, end: 8}} className='object-scale-down z-60' >
                            <img src='/kin20.png' alt="kintsugi shard" className='object-scale-down absolute'/>
                        </ParallaxLayer>
                        
                        
                         <ParallaxLayer offset={0} speed={0.4} className='flex justify-center items-start md:items-center z-200 absolute'>
                            <div className='text-red-50 text-6xl flex p-20 z-200'>Kintsugi</div>
                        </ParallaxLayer>

                        <ParallaxLayer className='flex justify-end' offset={6} sticky={{ start:6, end: 12}} speed={500}>
                            <div className=" object-scale-down size-20 md:size-70 m-5 md:m-20">
                                <p className='text-red-50 flex p-0 -z-20 object-scale-down text-[6px] md:text-base drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Kintsugi is the Japanese practice of repairing something broken, usually pottery and highlighting the cracks 
                                 <br />through the use of gold or silver coloured lacquer. The intention is to highlight the imperfections and show that beauty can be found in mistakes and errors and celebrate that difference. </p>
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer className='flex justify-end items-end' offset={7} sticky={{ start:6, end: 12}} speed={500}>
                            <div className="flex items-end object-scale-down size-20 md:size-70 mr-90">
                                <img src='/kintsugi-pot.png'className='m-0'/>
                               
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer sticky={{ start:8, end: 12}}>
                            <div className=" object-scale-down size-20 md:size-70 m-5 md:m-20 md:ml-0">
                                <p className='text-red-50 flex p-0 z-20 object-scale-down text-[6px] md:text-base pr-20 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>This view on life is symbolised through <br />just one word and can<br /> be related to other <br />aspects of life which I feel are very personal to me.</p>
                                <p className='text-red-50 flex p-0 z-20 object-scale-down text-[6px] md:text-base pr-20 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'><br />As someone who grew up with Autism before a time it was a widely well known condition, I'm not unfamilar with being seen as different. Brains all form in different ways, they create paths not unlike how cracks form in shattered pottery.</p>
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer className='flex items-end' sticky={{ start:9, end: 12}}>
                            <div className=" object-scale-down size-20 md:size-80 m-0">
                                <p className='text-red-50 flex p-0 z-20 object-scale-down text-[6px] md:text-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] pr-20'>By reexamining Autism through the lens of Kintsugi, you're able to view the condition as something to be appreciated and grateful for. You can look at how you've devloped as golden paths of uniqueness rather than the shameful cracks people try to make you feel</p>
                                <p className='text-red-50 flex p-0 z-20 object-scale-down text-[6px] md:text-sm pr-20 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'><br /> Kintsugi comes from 'Kin' meaning gold and 'Tsugi' which is repair, so it's symbolic that you repair with gold, when you apply this idealogy to autism rather than your differing development being shameful, you are joined by gold.</p>
                            </div>
                        </ParallaxLayer>
                         <ParallaxLayer className='flex justify-center items-center' offset={10} sticky={{ start:10, end: 12}} speed={500}>
                            <div className="flex rounded-full items-end object-scale-down size-20 md:size-70 mb-45" >
                                <img src='/kintsugi-brain.png'className='m-0'/>
                               
                            </div>
                        </ParallaxLayer>
                        

            </Parallax>
        </div>
    </header>
  )
}

export default KintsugiContainer
