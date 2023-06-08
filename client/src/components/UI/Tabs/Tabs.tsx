import React, { Fragment } from 'react'
import { Tab, Tabs as ReactTabs, TabList, TabPanel } from 'react-tabs';
import s from './Tabs.module.scss'
import classNames from 'classnames';

type Tab = {
    title: string;
    value: React.ReactNode;
    state?: unknown;
}

interface TabsProps {
    tabs: Array<Tab>;
    classname?: string;
}

const Tabs: React.FC<TabsProps> = ({
    tabs,
    classname,
}) => {
    return (
        <ReactTabs selectedTabClassName={s.selected} className={classNames(s.tabs, classname)}>
            <div className={s.container}>
                <TabList className={s.list}>
                    {tabs.map((el) => {
                        const { title, state = true } = el;
                        return (
                            <Fragment key={title}>
                                {state ? <Tab className={s.tab}>{title}</Tab> : null}
                            </Fragment>
                        );
                    })}
                </TabList>
            </div>
            {tabs.map((el) => {
            const { title, value, state = true } = el;

				return (
					<Fragment key={title}>{state ? <TabPanel>{value}</TabPanel> : null}</Fragment>
				);
			})}
        </ReactTabs>
    )
}

export default Tabs