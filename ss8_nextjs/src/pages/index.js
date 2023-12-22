import axios from 'axios';

const Home = ({ covids }) => {
  return (
    <div>
      <h1>Thông tin COVID-19 tại Việt Nam</h1>
      <ul>
        {covids.map((data) => (
          <li key={data.id}>
            <h2>Ngày thống kê: {data.date}</h2>
            <p>Số ca được xác nhận: {data.confirmed}</p>
            <p>Số ca đang điều trị: {data.active}</p>
            <p>Số ca đã khỏi: {data.recovered}</p>
            <p>Số ca tử vong: {data.deaths}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
                   const response = await axios.get('http://localhost:8080/covids'); 
    const covids = response.data                    ;
  

    return {
      props: {
        covids: covids
      },
    };
  } catch (error) {
    console.error('Error fetching COVID-19 data:', error.message);
    return {
      props: {
        covids: [],
      },
    };
  }
};

export default Home;