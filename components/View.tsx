import React from "react";
import { client } from "@/sanity/lib/client";
import Ping from "./Ping";
import { writeClient } from "@/sanity/lib/write-clint";
import {after} from "next/server";

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client.withConfig({ useCdn: false }).fetch(`*[_type == "startup" && _id == $id][0]{views}`, { id });
  // Increment the view count by 1
  after(
    async () => {
      await writeClient.patch(id).set({ views: totalViews + 1 }).commit()
    }
  );
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">
          {totalViews > 1 ? "views" : "view"} : {` ${totalViews}`}
        </span>
      </p>
    </div>
  );
};

export default View;
