import './style.css'

function Gallery() {
    return (
        <section>
            <div className="firstsection">
                <img className="image" src="somi.jpeg"/>
                <img className="image" src="sejeong.jpeg"/>
                <img className="image" src="yoojung.jpeg"/>
                <img className="image" src="chungha.jpeg"/>
            </div>

            <div className="secondsection">
                <img className="image" src="sohye.jpeg"/>
                <img className="image" src="pinky.jpeg"/>
                <img className="image" src="chaeyeon.jpeg"/>
                <img className="image" src="doyeon.jpeg"/>
            </div>

            <div className="thirdsection">
                <img className="image" src="mina.jpeg"/>
                <img className="image" src="nayoung.jpeg"/>
                <img className="image" src="yeonjung.jpeg"/>
                <img className="image" src="ioi.jpeg"/>
            </div>
        </section>
    )
    }
export default Gallery