import main1 from '../imgs/main1.jpg';
import main2 from '../imgs/main2.jpg';
import main3 from '../imgs/main3.jpg';
import main4 from '../imgs/main4.jpg';

const MenuItems = () => {
    return [
        {
            title: '회사 소개',
            subtitle: '회사소개서',
            img: main1,
            page: '/company',
            modalContent: [
                { title: '회사 소개서', items: [] },
                { title: '회사 전경', items: [] },
            ],
        },
        {
            title: '제품 소개',
            subtitle: '피스, 나사',
            img: main2,
            page: '/products',
            modalContent: [
                {
                    title: '피스, 나사',
                    items: {
                        menu01: '리벳 & 직결 피스',
                        menu02: '태핑 나사',
                        menu03: '가구용 피스'
                    },
                },
                {
                    title: '볼트, 너트, 와셔, 앙카',
                    items: {
                        menu01: '육각머리볼트, 건축용볼트',
                        menu02: '볼트',
                        menu03: '렌치볼트',
                        menu04: '십자머리 볼트',
                        menu05: '와셔',
                        menu06: '앙카',
                        menu07: '너트',
                        menu08: '주문제작'
                    },
                },
                {
                    title: '화스너, 와이어, 클램프, 행거',
                    items: {
                        menu01: '화스너, 베이스판, 빳지, 꺽쇠',
                        menu02: '행거, 빔클램프',
                        menu03: '브라켓, 새들',
                        menu04: '틴버클, 체인, 와이어로프, 부속품',
                    },
                },
                {
                    title: '기타 제품',
                    items: {
                        menu01: '기타제품',
                        menu02: '인서트',
                        menu03: '캡'
                    },
                },
            ],
        },
        {
            title: '문의하기',
            subtitle: '고객지원',
            img: main3,
            page: '/contact',
            modalContent: [
                { title: '고객지원', items: [] },
            ],
        },
        {
            title: '사업장 안내',
            subtitle: '오시는 길',
            img: main4,
            page: '/about',
            modalContent: [
                { title: '오시는 길', items: [] },
            ],
        },
    ]
};

export default MenuItems;