import './MyTable.css';
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    fadeInUp: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    }
}

let reservation = [];

const MyTable = props => {
    const [data, setData] = useState([]);
    const { tableHandler, tableData } = props;

    const checkAndAdd = (id, placeName, time, isMarked) => {
        if (!isMarked) {
            reservation.push({ id, placeName, time, isReserved: true });
        } else {
            let index = reservation.map(el => el.id).indexOf(id);
            reservation.splice(index, 1);
        }
        tableHandler(reservation);
    }

    useEffect(() => {
        setData(tableData);
        reservation = [];
    }, [tableData])

    const clikHandler = (placeName, time, isReserved, id, isMarked) => {
        if (isReserved === 'true') {
            return;
        } else {
            const copyData = JSON.parse(JSON.stringify(data));
            const newData = copyData.map(el => {
                if (el.place1.id === id) {
                    el.place1.isMarked = !el.place1.isMarked;
                }
                if (el.place2.id === id) {
                    el.place2.isMarked = !el.place2.isMarked;
                }
                if (el.place3.id === id) {
                    el.place3.isMarked = !el.place3.isMarked;
                }
                if (el.place4.id === id) {
                    el.place4.isMarked = !el.place4.isMarked;
                }
                if (el.place5.id === id) {
                    el.place5.isMarked = !el.place5.isMarked;
                }
                if (el.place6.id === id) {
                    el.place6.isMarked = !el.place6.isMarked;
                }
                return el;
            });

            setData(newData);
            checkAndAdd(id, placeName, time, isMarked);
        }
    }
    const RenderItem = props => {
        const { isReserved, isMarked, time, id, price, name } = props.place;

        let className = '';
        if (isReserved === 'false') {
            className = 'item-disable'
        } else {
            className = 'item'
        }

        if (isMarked) {
            className = 'item-activ item-price-activ';
        }

        return (
            <div onClick={() => clikHandler(name, time, isReserved, id, isMarked)} className={className} >
                <div className={'item-price'}>
                    {`${price} грн`}
                </div>
            </div>
        );
    }

    const colums = [
        {
            title: 'Час',
            dataIndex: 'time',
            key: 'id',
            fixed: 'left',
            render: time => {
                return (
                    <div>
                        {time}
                    </div>
                );
            }
        },
        {
            title: "Корд 1",
            dataIndex: 'place1',
            key: 'id',
            render: place => {
                return <RenderItem place={place} />
            },
        },
        {
            title: "Корд 2",
            dataIndex: 'place2',
            key: 'id',
            render: place => {
                return <RenderItem place={place} />
            },
        },
        {
            title: "Корд 3",
            dataIndex: 'place3',
            key: 'id',
            render: place => {
                return <RenderItem place={place} />
            },
        },
        {
            title: "Корд 4",
            dataIndex: 'place4',
            key: 'id',
            render: place => {
                return <RenderItem place={place} />
            },
        },
        {
            title: "Корд 5",
            dataIndex: 'place5',
            key: 'id',
            render: place => {
                return <RenderItem place={place} />
            },
        },
        {
            title: "Корд 6",
            dataIndex: 'place6',
            key: 'id',
            render: place => {
                return <RenderItem place={place} />
            },
        }
    ]

    return (
        <StyleRoot>
            <div className="test" style={styles.fadeInUp}>
                <Table
                    dataSource={data}
                    columns={colums}
                    pagination={false}
                    scroll={{ y: 400 }}
                    rowKey="id"
                >
                </Table>
            </div>
        </StyleRoot>
    );
}

export default MyTable;