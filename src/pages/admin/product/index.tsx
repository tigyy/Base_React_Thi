/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {};
import { useGetProductQuery, useRemoveProductMutation } from "../../../api/product";
import { IProduct } from "../../../interface/products";
import { Table, Button, Skeleton, Popconfirm, Alert } from "antd";
import { Link } from "react-router-dom";
// import { AiOutlinePlus } from "react-icons/ai";

const AdminProduct = (props: Props) => {
    const { data: productData, error, isLoading } = useGetProductQuery();
    console.log(productData);
    
    const [removeProduct, { isLoading: isRemoveLoading, isSuccess: isRemoveSuccess }] =
    useRemoveProductMutation();

    const confirm = (id: number) => {
        removeProduct(id);
    };
    const dataSource = productData?.map(({ id, name, price }: IProduct) => ({
        key: id,
        name,
        price
    }));
    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Giá",
            dataIndex: "price",
            key: "price",
        },
        // {
        //     title: "image",
        //     dataIndex: "img",
        //     key: "img",
        //     render: (img: string) =>  <img src={img} alt="Product" style={{ maxWidth: "100px" }} />,
        // },
        {
            title: "Action",
            render: ({ key: id }: any) => {
                return (
                    <>
                        <div className="flex space-x-2">
                            <Popconfirm
                                title=" Do you want to delete this product?"
                                onConfirm={() => confirm(id)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button type="primary" danger>
                                    Xóa
                                </Button>
                            </Popconfirm>

                            <Button type="primary" danger>
                                <Link to={`/admin/product/${id}/edit`}>Sửa</Link>
                            </Button>
                        </div>
                    </>
                );
            },
        },
    ];

    return (
        <div>
            <header className="mb-4 flex justify-between items-center">
                <h2 className="font-bold text-2xl">Quản lý sản phẩm</h2>
                <Button type="primary" danger>
                    <Link to="/admin/product/add" className="flex items-center space-x-2">
                        {/* <AiOutlinePlus /> */}
                        Thêm sản phẩm
                    </Link>
                </Button>
            </header>
            {isRemoveSuccess && <Alert message="Success Text" type="success" />}
            {isLoading ? <Skeleton /> : <Table dataSource={dataSource} columns={columns} />}
        </div>
    );
};

export default AdminProduct;
