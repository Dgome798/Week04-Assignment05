import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';

// define a getStaticProps() function - this name is defined by next.js
export async function getStaticProps() {
  const allData = getSortedList();
  return {
    props: { allData }
  };
}

// export our home page component Home
export default function FirstPost( { allData } ) {
  return (
    <Layout home>
      <h1>List of other Cool People</h1>
      <div className="list-group">
        {allData.map(
            ({id, name}) => (
              <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action">
                {name}
              </Link>
            )
          )
        }
        <h2>
        <Link href="/pages/index">Back to home</Link>
      </h2>
      </div>
    </Layout>
  );
}