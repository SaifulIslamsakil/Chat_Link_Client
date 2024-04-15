"use client"
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useState } from 'react';
const EmojiPiker = ({setCurrenEmoji}) => {
    return (
        <div className=' absolute bottom-20'>
              <Picker data={data} onEmojiSelect={(e)=>{
                setCurrenEmoji(e.native)
              }} />
        </div>
    );
};

export default EmojiPiker;