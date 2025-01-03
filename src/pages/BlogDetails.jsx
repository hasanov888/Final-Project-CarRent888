import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

import commentImg from "../assets/all-images/nuran.png";

import "../styles/blog-details.css";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.title === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog.imgUrl} alt="" className="w-100" />
                <h2 className="section__title mt-4">{blog.title}</h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i class="ri-user-line"></i> {blog.author}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-calendar-line"></i> {blog.date}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-time-line"></i> {blog.time}
                  </span>
                </div>

                <p className="section__description">{blog.description}</p>
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-4">{blog.quote}</blockquote>
                </h6>
                <p className="section__description">{blog.description}</p>
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5">3 Şərh</h4>

                <div className="single__comment d-flex gap-3">
                  <img src={commentImg} alt="" />
                  <div className="comment__content">
                    <h6 className=" fw-bold">Nuran</h6>
                    <p className="section__description mb-0">14 Iyul, 2022</p>
                    <p className="section__description">
                    "Bu xidmətlə tanış olmaq çox xoş oldu! Vahid müştəri dəstək xidmətindən çox razı qaldım, maşının təmizliyi və texniki vəziyyəti mükəmməl idi. Mənim üçün vacib olan əsas amil, zamanında və düzgün maşının təhvil verilməsi idi və Rent a Car şirkəti bu işin öhdəsindən çox yaxşı gəldi. Həmçinin, qiymətlər çox münasib idi və əlavə gizli ödənişlər yox idi, bu da çox müsbət cəhət oldu. Gələcəkdə yenə bu xidmətdən istifadə edəcəyəm və dostlarıma da tövsiyə edəcəyəm. Tezliklə yenə görüşərik!"
                    </p>

                    <span className="replay d-flex align-items-center gap-1">
                      <i class="ri-reply-line"></i> Təkrar Zəng
                    </span>
                  </div>
                </div>

                {}
                <div className="leave__comment-form mt-5">
                  <h4>Şərh yazın</h4>
                  <p className="section__description">
                  Post yaratmaq və ya şərh etmək üçün daxil olmalısınız
                  </p>

                  <Form>
                    <FormGroup className=" d-flex gap-3">
                      <Input type="text" placeholder="Ad"/>
                      <Input type="email" placeholder="Email" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="Şərh..."
                      ></textarea>
                    </FormGroup>

                    <button className="btn comment__btn mt-3">
                      Şərh yazın
                    </button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className=" fw-bold">Son Mesajlar</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.title}`}>{blog.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
