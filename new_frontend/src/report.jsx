import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ReportPage from "../components/reports-page-components/report";
import axios from "axios";
import API_URL from "./config/api";

const Report = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [report, setReport] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/reports/${params.id}/`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        setReport(response.data);
      })
      .catch(() => {
        navigate("/*");
      });
  }, [params.id, navigate]);

  useEffect(() => {
    if (report) {
      document.title = `گزارش - ${report.name}`;
    }
  }, [report]);

  if (!report) {
    return null;
  }

  return (
    <ReportPage
      title={report.name}
      description={report.description}
      imageSrc={report.image}
    />
  );
};

export default Report;

