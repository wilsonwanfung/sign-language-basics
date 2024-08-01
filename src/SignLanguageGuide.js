import React from 'react';
import chungChiLogo from './asset/picture/chungchi.png'; // Update with the correct path
import cheerLogo from './asset/picture/CHEER.png'; // Update with the correct path

const SignLanguageGuide = () => {
  const words = [
    { english: 'Yes', chinese: '是', hksl: <a href="http://www.cslds.org/hkslbrowser/databank_detail.jsp?gloss=%E6%98%AF/%E4%BF%82&sid=" target="_blank" rel="noopener noreferrer">Nod head or thumb up</a> },
    { english: 'No', chinese: '不是', hksl: <a href="http://www.cslds.org/hkslbrowser/databank_detail.jsp?gloss=%E4%B8%8D%E5%8F%AF%E4%BB%A5&sid=" target="_blank" rel="noopener noreferrer">Shake head or wave hand</a> },
    { english: 'Restaurant', chinese: '餐廳', hksl: <a href="http://www.cslds.org/hkslbrowser/databank_detail.jsp?gloss=%E9%A4%90%E5%BB%B3&sid=" target="_blank" rel="noopener noreferrer">Mimicking eating motion</a> },
    { english: 'Hot', chinese: '熱', hksl: <a href="http://www.cslds.org/hkslbrowser/databank_detail.jsp?gloss=%E7%82%8E%E7%86%B1&sid=" target="_blank" rel="noopener noreferrer">Fan face with hand</a> },
    { english: 'What', chinese: '什麼', hksl: <a href="http://www.cslds.org/hkslbrowser/databank_detail.jsp?gloss=%E4%BB%80%E9%BA%BC&sid=" target="_blank" rel="noopener noreferrer">Shake open hand</a> },
    { english: 'Who', chinese: '誰', hksl: <a href="http://www.cslds.org/hkslbrowser/databank_detail.jsp?gloss=%E5%A4%9A%E8%AC%9D(%E4%BD%A0)&sid=" target="_blank" rel="noopener noreferrer">Chin stroke</a> },
    { english: 'Understand', chinese: '明白', hksl: <a href="http://www.cslds.org/hkslbrowser/databank_detail.jsp?gloss=%E6%98%8E%E7%99%BD/%E6%87%82&sid=" target="_blank" rel="noopener noreferrer">Palm to forehead</a> },
    { english: "Don't understand", chinese: '不明白', hksl: <a href="http://www.cslds.org/hkslbrowser/databank_detail.jsp?gloss=%E4%B8%8D%E6%98%8E%E7%99%BD&sid=" target="_blank" rel="noopener noreferrer">Cross arms</a> },
    { english: 'Thank you', chinese: '謝謝', hksl: <a href="http://www.cslds.org/hkslbrowser/databank_detail.jsp?gloss=%E5%A4%9A%E8%AC%9D(%E4%BD%A0)&sid=" target="_blank" rel="noopener noreferrer">Gesture of gratitude</a> },
  ];

  return (
    <div className="sign-language-guide">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <img src={chungChiLogo} alt="Chung Chi College" style={{ height: '50px' }} />
        <img src={cheerLogo} alt="Cheer 融匯" style={{ height: '50px' }} />
      </header>
      <h1>Basic Words in English, Traditional Chinese, and Hong Kong Sign Language</h1>
      <table>
        <thead>
          <tr>
            <th>English</th>
            <th>Traditional Chinese</th>
            <th>HKSL Description</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word, index) => (
            <tr key={index}>
              <td>{word.english}</td>
              <td>{word.chinese}</td>
              <td>{word.hksl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SignLanguageGuide;