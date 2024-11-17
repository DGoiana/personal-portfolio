import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const About = () => {
   const codeString = `const goiana = {
   enrolling: informatics/computing engineering,
   from: portugal,
   ask_me: [football, universe, new software, music],
   music: [(frank ocean, white ferrari), (jcole, love yourz)],
   show: [friends, ted lasso, harry potter],
   looking_forward: [more open-source contributions, internship, more reading],
   tech: [flutter, react, next, vue, c/c++, python],
   hobbies: [coding, scouts, hiking]
}`;

   return (
      <main className="flex justify-center flex-grow pt:32 md:pt-64">
         <SyntaxHighlighter
            language="ruby"
            style={{
               ...solarizedlight,
               'pre[class*="language-"]': { background: '#f7eee4' }
            }}
         >
            {codeString}
         </SyntaxHighlighter>
      </main>
   )
}
export default About