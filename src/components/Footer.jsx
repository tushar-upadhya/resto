import React from "react";
import { footerSocials } from "../Data";
import { mainMenu } from "../Data";
import { explores } from "../Data";
import { footerContacts } from "../Data";
import { payements } from "../Data";

const Footer = () => {
    return (
        <div className="section">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mb-8">
                <div>
                    <div className="text-xl font-semibold mb-3">FoodZone</div>
                    <p className="text-[1rem] mb-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eum asperiores, laboriosam qui labore eveniet ut
                        iusto culpa animi officiis quo?
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="">Follow Us</span>
                        <div className="h-[2px] w-12 bg-black"></div>
                        {footerSocials.map((footerSocial, index) => {
                            return (
                                <div
                                    className="text-xl hover:text-[#475569] font-semibold duration-300"
                                    key={index}
                                >
                                    <a href={footerSocial.url} target="_blank">
                                        {footerSocial.icon}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    <div>
                        <h3 className="font-semibold text-[1.1rem] mb-4">
                            Main Menu
                        </h3>
                        {mainMenu.map((menu) => {
                            return (
                                <div className="text-[1rem] mb-2" key={menu.id}>
                                    <a href={`#${menu.href}`}>{menu.text}</a>
                                </div>
                            );
                        })}
                    </div>
                    <div className="">
                        <h3 className="font-semibold text-[1.1rem]  mb-4">
                            Explore
                        </h3>
                        {explores.map((explore, index) => {
                            return (
                                <div className="text-[1rem] mb-2" key={index}>
                                    <a href="#">{explore}</a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="">
                    <h3 className="font-semibold text-[1.1rem] mb-4">
                        Contact
                    </h3>
                    {footerContacts.map((footerContact) => {
                        return (
                            <div
                                className="flex items-center gap-4 mb-4 cursor-pointer"
                                key={footerContact.id}
                            >
                                <div className="text-xl">
                                    {footerContact.icon}
                                </div>
                                <div>{footerContact.text}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-wrap justify-between gap-4 pb-8">
                <div className="">
                    &copy;{new Date().getFullYear()} All Rights Reserved ||
                    Designed and Coded by{" "}
                    <a
                        className="hover:text-[#475569] font-semibold duration-300 "
                        target="_blank"
                        href="https://tusharupadhyay.vercel.app/"
                    >
                        Tushar Upadhyay
                    </a>{" "}
                </div>

                <div className="flex gap-2">
                    {payements.map((payment, index) => {
                        return (
                            <div className="" key={index}>
                                <img src={payment} alt="" className="w-10" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Footer;
