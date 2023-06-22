import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Cairo_Play } from "next/font/google";
const Footer = () => {

    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
            <Layout className="py-8 flex items-center justify-between ">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <Link href="/">Say Hello</Link>
                <Link href="/">Say Hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer;
