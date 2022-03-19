// @flow
import React, {Fragment, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from "react-router-dom";

import * as typeProductAction from './../../../../actions/typeProductAction';

export default function CreateProduct() {
  const dispatch = useDispatch();

  let [productInformation,
    setProductInformation] = useState({comment: []})
  let [listImage,
    setListImage] = useState(['']);
  let [listContent,
    setListContent] = useState(['']);
  let [listInformation,
    setListInformation] = useState(['']);

  const allTypeProductReducer = useSelector(state => state.allTypeProduct);
  const {loading: loadingAllTypeProduct, typeProduct: typeProduct, error: errorAllTypeProduct} = allTypeProductReducer;

  useEffect(() => {
    dispatch(typeProductAction.getAllTypeProduct())
  }, [])

  useEffect(() => {
    if(typeProduct){
      setProductInformation({
        ...productInformation,
        type: typeProduct[0].name,
        status: 'Còn Hàng'
      })
    }
  }, [typeProduct])

  const createProduct = (e) => {
    e.preventDefault();
    console.log(productInformation)
  }

  const addImage = () => {
    setListImage([
      ...listImage,
      ''
    ])
  }

  const deleteImage = (index) => {
    listImage.splice(index, 1);
    setListImage(listImage);
    setProductInformation({
      ...productInformation,
      image: listImage
    })
  }

  const addContent = () => {
    setListContent([
      ...listContent,
      ''
    ])
  }

  const deleteContent = (index) => {
    listContent.splice(index, 1);
    setListContent(listContent);
    setProductInformation({
      ...productInformation,
      content: listContent
    })
  }

  const addInformation = () => {
    setListInformation([
      ...listInformation,
      ''
    ])
  }

  const deleteInformation = (index) => {
    listInformation.splice(index, 1);
    setListInformation(listInformation);
    setProductInformation({
      ...productInformation,
      information: listInformation
    })
  }

  const updateImage = (e, index) => {
    // console.log(e, index)
    listImage[index] = e;
    setListImage([...listImage]);
    setProductInformation({
      ...productInformation,
      image: listImage
    })
    // console.log(listImage)
  }

  const updateContent = (e, index) => {
    // console.log(e, index)
    listContent[index] = e;
    setListContent([...listContent]);
    setProductInformation({
      ...productInformation,
      content: listContent
    })
    // console.log(listImage)
  }

  const updateInformation = (e, index) => {
    // console.log(e, index)
    listInformation[index] = e;
    setListInformation([...listInformation]);
    setProductInformation({
      ...productInformation,
      information: listInformation
    })
    // console.log(listImage)
  }

  return (
    <Fragment>
      <div
        className=""
        id="exampleModal2"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Product</h5>
            </div>
            <div className="modal-body">
              <form onSubmit={(e) => createProduct(e)}>
                <div className="form-group">
                  <label className="col-form-label">Name Product</label>
                  <input type="text" className="form-control" placeholder=" " name="name" // required
                    onChange={(e) => setProductInformation({
                    ...productInformation,
                    name: e.target.value
                  })}/>

                  <label className="col-form-label">Type Product</label>
                  <select id="agileinfo-nav_search" name="agileinfo_search" className="border" // required=""
                    onChange={(e) => setProductInformation({
                    ...productInformation,
                    type: e.target.value
                  })}>

                    {typeProduct && typeProduct.map((item, index) => (
                      <option key={item.id} value={item.name}>{item.name}</option>
                    ))}

                  </select>

                  <label className="col-form-label">Status</label>
                  <select id="agileinfo-nav_search" name="agileinfo_search" className="border" // required=""
                    onChange={(e) => setProductInformation({
                    ...productInformation,
                    status: e.target.value
                  })}>
                    <option value="Còn Hàng">Còn Hàng</option>
                    <option value="Hết Hàng">Hết Hàng</option>
                  </select>

                  <label className="col-form-label marr-5">Image Product</label>
                  <i className="far fa-plus-square pointer" onClick={() => addImage()}></i>
                  <div className="flexbox-center-between">
                    {listImage.map((image, index) => (
                      <Fragment key={index}>
                        <input type="text" className="form-control" placeholder=" " style={{
                          width: '95%'
                        }} name="image" // required
                          value={image} onChange={(e) => updateImage(e.target.value, index)}/>
                        <i className="far fa-trash-alt pointer" onClick={() => deleteImage(index)}></i>
                      </Fragment>
                    ))}
                  </div>
                  {/* <i className="far fa-minus-square pointer"></i> */}

                  <label className="col-form-label">Rate</label>
                  <input type="number" className="form-control" placeholder=" " name="rate" // required
                    onChange={(e) => setProductInformation({
                    ...productInformation,
                    rate: e.target.value
                  })}/>

                  <label className="col-form-label">Quatity</label>
                  <input type="number" className="form-control" placeholder=" " name="rate" // required
                    onChange={(e) => setProductInformation({
                    ...productInformation,
                    quatity: e.target.value
                  })}/>

                  <label className="col-form-label">Rate Vote</label>
                  <input type="number" className="form-control" placeholder=" " name="rate_note" // required
                    onChange={(e) => setProductInformation({
                    ...productInformation,
                    rate_vote: e.target.value
                  })}/>

                  <label className="col-form-label marr-5">Content</label>
                  <i className="far fa-plus-square pointer" onClick={() => addContent()}></i>
                  <div className="flexbox-center-between">
                    {listContent.map((content, index) => (
                      <Fragment key={index}>
                        <input type="text" className="form-control" placeholder=" " style={{
                          width: '95%'
                        }} // required
                          value={content} onChange={(e) => updateContent(e.target.value, index)}/>
                        <i className="far fa-trash-alt pointer" onClick={() => deleteContent(index)}></i>
                      </Fragment>
                    ))}
                  </div>

                  <label className="col-form-label">New Price</label>
                  <input type="number" className="form-control" placeholder=" " name="rate" // required
                    onChange={(e) => setProductInformation({
                    ...productInformation,
                    new_price: e.target.value
                  })}/>

                  <label className="col-form-label">Old Price</label>
                  <input type="number" className="form-control" placeholder=" " name="rate" // required
                    onChange={(e) => setProductInformation({
                    ...productInformation,
                    old_price: e.target.value
                  })}/>

                  <label className="col-form-label marr-5">Information</label>
                  <i className="far fa-plus-square pointer" onClick={() => addInformation()}></i>
                  <div className="flexbox-center-between">
                    {listInformation.map((information, index) => (
                      <Fragment key={index}>
                        <input type="text" className="form-control" placeholder=" " style={{
                          width: '95%'
                        }} // required
                          value={information} onChange={(e) => updateInformation(e.target.value, index)}/>
                        <i
                          className="far fa-trash-alt pointer"
                          onClick={() => deleteInformation(index)}></i>
                      </Fragment>
                    ))}
                  </div>

                </div>
                <div className="right-w3l">
                  <button type="submit" className="form-control">Create Product</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};