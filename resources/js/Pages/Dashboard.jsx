import Handernave from '@/Components/Handernave';
import Layout from '@/Layouts/Layout';
import Boxicone from '@/Components/Boxicone';

export default function Dashboard(props) {
    return (
        <>
            <Boxicone />
        </>
    );
}

Dashboard.layout = page => <Layout children={page} title="Dashboard" />
