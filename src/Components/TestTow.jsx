"use client"
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
const TestTow = () => {
    return (
        <div>
              <Picker data={data} onEmojiSelect={console.log} />
        </div>
    );
};

export default TestTow;