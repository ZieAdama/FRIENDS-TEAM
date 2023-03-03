import Boxicone from '@/Components/Boxicone';
import Handernave from '@/Components/Handernave';
import Layout from '@/Layouts/Layout';
import { Link, Head } from '@inertiajs/react';

export default function Welcome(props) {
    return (
            <>
  {/* <!-- Content Wrapper. Contains page content --> */}
  <div className="content-wrapper">
    <Handernave />
    {/* <!-- Main content --> */}
    <div className="content">
      <div className="container-fluid">
        <Boxicone />
        <div className="row">
          

  
        </div>
       </div>
    </div>
  </div>
</>
    );
}

Welcome.layout = page => <Layout children={page} title= "Welcome" />
