import React from "react";
import { useTranslation } from "react-i18next";

interface CouponsTableProps {
  // items: {
  //   isActive: boolean;
  //   code: string;
  //   sale: string | number;
  //   valid_for: string;
  //   validity_date: string;
  // }[];
  head: JSX.Element;
  body: JSX.Element;
}
export const CouponsTable: React.FC<CouponsTableProps> = ({ head, body }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>{head}</thead>
        <tbody>{body}</tbody>
      </table>
    </div>
  );
};
