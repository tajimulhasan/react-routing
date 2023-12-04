import React from 'react';

const Blogs = () => {
    return (
        <div className='ms-5 me-5'>
           <div className="context-api bg-success-subtle text-emphasis-success p-3 rounded mb-3">
            <h3>What is the purpose of Context Api in react?</h3>
            <p>Context provides a way to pass data like invisible tree. Generally, To pass data component to child we use props. When our need multichild to pass data if we use props its to much DRY. In that case we use a react hook to easy this. It's 'useContext'. To use this at first we have to EXPORT 'createContext' with a demo function name in the top of Componet parent Function. <span className='fw-bold'>Example: 'EXPORT const MyShopContext = createContext (null or someText)'</span>. Then where we get that without props we have to wrap with that imported name dot  provider. And set value of it what I send data to child. <span className='fw-bold'>As example that: `MyShopContext.provider value="" or any aray object leftarrow/MyShopContext.provider</span>. Then whre I accept that data we have to IMPORT that useContext by variable.</p>
           </div>
           <div className="semantic-tag bg-success-subtle text-emphasis-success p-3 rounded mb-3">
            <h3>What is Semantic tag? Whose are them?</h3>
            <p>Semantic tag is content based tag. It's contain taged name ralated text. We are normally use every time in html. These tags are: <span className='fw-bold'>header, navbar, main, section, footer, article that's it</span>. </p>
           </div>
           <div className="inline-tag bg-success-subtle text-emphasis-success p-3 rounded mb-3">
            <h3>Inline block vs Inline block element</h3>
            <p>Inline Block which is block of his position takes full width. It's setted verticlly, umm up to down. such as <span className='fw-bold'>div, main, article, table, ul, li, nav, h1-h6, header, form, section, footer etc</span> . On the other hand Inline Elements is set horizontally: such as <span className='fw-bold'>img, a, button, span, strong, input, label, small etc.</span> </p>
           </div>
        </div>
    );
};

export default Blogs;