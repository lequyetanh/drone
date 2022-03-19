// @flow
import React, {Fragment, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from "react-router-dom";
import * as productAction from './../../../../actions/productAction'
import * as typeProductAction from './../../../../actions/typeProductAction'
import './EditProduct.scss'

export default function EditProduct() {

  const dispatch = useDispatch();
  let id = parseInt(useParams().id);

  const productItem = useSelector((state) => state.productFromId)
  const {loading, product, error} = productItem;
  const allTypeProductReducer = useSelector(state => state.allTypeProduct);
  const {loading: loadingAllTypeProduct, typeProduct: typeProduct, error: errorAllTypeProduct} = allTypeProductReducer;

  const [productInformation,
    setProductInformation] = useState({})

  useEffect(() => {
    dispatch(productAction.getProductFromId(id))
    dispatch(typeProductAction.getAllTypeProduct())
  }, [id])

  useEffect(() => {
    if (product) {
      setProductInformation(product);
      console.log(productInformation)
    }
  }, [product])

  const addImage = () => {
    productInformation
      .image
      .push('')
    setProductInformation({
      ...productInformation
    });
  }

  const updateImage = (value, index) => {
    productInformation.image[index] = value;
    setProductInformation({
      ...productInformation
    })
  }

  const deleteImage = (index) => {
    productInformation
      .image
      .splice(index, 1);
    setProductInformation({
      ...productInformation
    })
  }

  const addContent = () => {
    productInformation
      .content
      .push('')
    setProductInformation({
      ...productInformation
    });
  }

  const updateContent = (value, index) => {
    productInformation.content[index] = value;
    setProductInformation({
      ...productInformation
    })
  }

  const deleteContent = (index) => {
    productInformation
      .content
      .splice(index, 1);
    setProductInformation({
      ...productInformation
    })
  }

  const addInformation = () => {
    productInformation
      .information
      .push('')
    setProductInformation({
      ...productInformation
    });
  }

  const updateInformation = (value, index) => {
    productInformation.information[index] = value;
    setProductInformation({
      ...productInformation
    })
  }

  const deleteInformation = (index) => {
    productInformation
      .information
      .splice(index, 1);
    setProductInformation({
      ...productInformation
    })
  }

  const editProduct = (e) => {
    e.preventDefault();
    console.log(productInformation)
  }

  return (
    <Fragment>
      {productInformation
        ? <div
            className=""
            id="exampleModal2"
            tabIndex="-1"
            role="dialog"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Product</h5>
                </div>
                <div className="modal-body">
                  <form onSubmit={(e) => editProduct(e)}>
                    <div className="form-group">
                      <label className="col-form-label">Name Product</label>
                      <input type="text" className="form-control" placeholder=" " name="name" value={productInformation.name} // required
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
                          <option
                            defaultValue={item.name == productInformation.type}
                            key={index}
                            value={item.name}>{item.name}</option>
                        ))}

                      </select>

                      <label className="col-form-label">Status</label>
                      <select id="agileinfo-nav_search" name="agileinfo_search" className="border" // required=""
                        onChange={(e) => setProductInformation({
                        ...productInformation,
                        status: e.target.value
                      })}>
                        <option
                          defaultValue={productInformation.state == 'Còn Hàng'
                          ? 'selected'
                          : ''}
                          value="Còn Hàng">Còn Hàng</option>
                        <option
                          defaultValue={productInformation.state == 'Hết Hàng'
                          ? 'selected'
                          : ''}
                          value="Hết Hàng">Hết Hàng</option>
                      </select>

                      <label className="col-form-label marr-5">Image Product</label>
                      <i className="far fa-plus-square pointer" onClick={() => addImage()}></i>
                      <div className="flexbox-center-between">
                        {productInformation.image && productInformation
                          .image
                          .map((image, index) => (
                            <Fragment key={index}>
                              <input type="text" className="form-control" placeholder=" " style={{
                                width: '95%'
                              }} name="image" // required
                                value={image} onChange={(e) => updateImage(e.target.value, index)}/>
                              <i className="far fa-trash-alt pointer" onClick={() => deleteImage(index)}></i>
                            </Fragment>
                          ))}
                      </div>

                      <label className="col-form-label">Rate</label>
                      <input value={productInformation.rate} type="number" className="form-control" placeholder=" " name="rate" // required
                        onChange={(e) => setProductInformation({
                        ...productInformation,
                        rate: e.target.value
                      })}/>

                      <label className="col-form-label">Quatity</label>
                      <input value={productInformation.quatity} type="number" className="form-control" placeholder=" " name="rate" // required
                        onChange={(e) => setProductInformation({
                        ...productInformation,
                        quatity: e.target.value
                      })}/>

                      <label className="col-form-label">Rate Vote</label>
                      <input value={productInformation.rate_vote} type="number" className="form-control" placeholder=" " name="rate_note" // required
                        onChange={(e) => setProductInformation({
                        ...productInformation,
                        rate_vote: e.target.value
                      })}/>

                      <label className="col-form-label marr-5">Content</label>
                      <i className="far fa-plus-square pointer" onClick={() => addContent()}></i>
                      <div className="flexbox-center-between">
                        {productInformation.content && productInformation.content.map((content, index) => (
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
                      <input value={productInformation.new_price} type="number" className="form-control" placeholder=" " name="rate" // required
                        onChange={(e) => setProductInformation({
                        ...productInformation,
                        new_price: e.target.value
                      })}/>

                      <label className="col-form-label">Old Price</label>
                      <input value={productInformation.old_price} type="number" className="form-control" placeholder=" " name="rate" // required
                        onChange={(e) => setProductInformation({
                        ...productInformation,
                        old_price: e.target.value
                      })}/>

                      <label className="col-form-label marr-5">Information</label>
                      <i className="far fa-plus-square pointer" onClick={() => addInformation()}></i>
                      <div className="flexbox-center-between">
                        {productInformation.information && productInformation.information.map((information, index) => (
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
                      <button type="submit" className="form-control">Edit Product</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        : <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
}
    </Fragment>
  );
};