// weatherId: OpenWeather 코드 (예: 500, 801, 611, 800 등)
import img1 from '../assets/bg/1.png'
import img2 from '../assets/bg/2.png'
import img3 from '../assets/bg/3.png'
import img4 from '../assets/bg/4.png'
import img5 from '../assets/bg/5.png'
import img6 from '../assets/bg/6.png'
import img7 from '../assets/bg/7.png'
import img8 from '../assets/bg/8.png'

export const getColorByWeatherId = (weatherId) => {
    if (weatherId === 800) return img2; // 맑음: 따뜻한 노랑(amber-300)

    const group = Math.floor(weatherId / 100); // 2,3,5,6,7,8...

    switch (group) {
        case 2: // 뇌우: 어두운 하늘 + 인디고 번쩍
            return img8
        case 3: // 이슬비: 옅은 청록 → 연한 하늘
            return img7
        case 5: // 비: 블루 톤 딥 → 라이트
            return img6
        case 6: // 눈: 화이트에 살짝 아이스블루
            return img5
        case 7: // 안개/먼지: 소프트 그레이 → 블루그레이
            return img4
        case 8: // 구름: 라이트 슬레이트 → 미드 슬레이트
            return img3
        default: // 예외
            return img1
    }
};