import React, {useState, useEffect} from 'react';
import blurb from '../../data/HomePageBlurb.txt';
export default function Blurb(){
    const [blurbText, setBlurbText] = useState(null);
    useEffect(() => {
      fetch(blurb)
        .then((r) => r.text())
        .then((text) => {
          setBlurbText(text);
        });
    }, []);
    return(
        <>
            <p>{blurbText}</p>
        </>
    );
}