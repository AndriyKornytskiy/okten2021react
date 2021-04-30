import './App.css';
import CharacterComponent from "./components/characterComponent/character.component";

function App() {
  return (
    <div>
        <div className={'wraper'}>
            <CharacterComponent
                description={'Iron Man'}
                image_scr={'https://www.odeon.co.uk/media/urtbzm3j/iron-man-square.jpg'}
                image_alt={'Iron Man'}/>
            <CharacterComponent
                description={'Captain America'}
                image_scr={'https://www.odeon.co.uk/media/02iaqfay/captain-america-square.jpg'}
                image_alt={'Captain America'}/>
            <CharacterComponent
                description={'Hulk'}
                image_scr={'https://dotlocal.org/wp-content/uploads/2020/06/Hulk-images-18-2.jpg'}
                image_alt={'Hulk'}/>
            <CharacterComponent
                description={'Thor'}
                image_scr={'https://www.odeon.co.uk/media/wkkbiijl/thor-square.jpg'}
                image_alt={'Thor'}/>
            <CharacterComponent
                description={'Black Widow'}
                image_scr={'https://www.odeon.co.uk/media/otti4uir/black-widow-square.jpg'}
                image_alt={'Black Widow'}/>
            <CharacterComponent
                description={'Hawkeye'}
                image_scr={'https://www.odeon.co.uk/media/nexj4j2y/hawkeye-square.jpg'}
                image_alt={'Hawkeye'}/>
            <CharacterComponent
                description={'Star-Lord'}
                image_scr={'https://www.odeon.co.uk/media/2pqjro1s/star-lord-square.jpg'}
                image_alt={'Star-Lord'}/>
            <CharacterComponent
                description={'Doctor Strange'}
                image_scr={'https://www.odeon.co.uk/media/3atl2tgz/dr-strange-square.jpg'}
                image_alt={'Doctor Strange'}/>
            <CharacterComponent
                description={'Ant-Man'}
                image_scr={'https://www.odeon.co.uk/media/wqzcwxba/ant-man-square.jpg'}
                image_alt={'Ant-Man'}/>
            <CharacterComponent
                description={'Spider-Man'}
                image_scr={'https://www.odeon.co.uk/media/f3tncxez/spider-man-square.jpg'}
                image_alt={'Spider-Man'}/>
            <CharacterComponent
                description={'Black Panther'}
                image_scr={'https://wallpapercave.com/wp/wp6267355.jpg'}
                image_alt={'Black Panther'}/>
            <CharacterComponent
                description={'Captain Marvel'}
                image_scr={'https://www.odeon.co.uk/media/q1ifoic4/captain-marvel-square.jpg'}
                image_alt={'Captain Marvel'}/>
        </div>

    </div>
  );
}

export default App;
