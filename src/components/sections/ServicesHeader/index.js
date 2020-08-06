import Title from '@simple/Title';
import Subtitle from '@simple/Subtitle';
import style from './style.scss';

export default class ServicesHeader extends React.Component {
  render() {
    return (
      <>
        <section className={style.headingSection}>
          <div className={style.titleWrapper}>
            <Title text='Co-create digital products from scratch' />
          </div>
          <div className={style.subtitleWrapper}>
            <Subtitle text='from idea to market-ready product' />
          </div>
        </section>
        <section className={style.serviceSection}>
          <div className={style.item} tabIndex='-1'>
            <div className={style.icon}>
                <svg height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="m.5.5h59v59h-59z" fill="#d8d8d8" opacity="0" stroke="#979797"/><g fill="#393939" transform="translate(0 1)"><path d="m7.99999851 41.9999985c-4.41827851.0000015-7.99999867-3.5816985-8-8v-25.99999999c-.00000019-4.41826851 3.58172149-7.99999867 8-8h25.99999999c4.4183015-.00000019 8.0000015 3.58172149 8 8v9.99999999h-2v-9.99999999c.0000015-3.31370851-2.6862985-5.99999851-6-6h-25.99999999c-3.31370851.00000149-5.99999851 2.68629149-6 6v25.99999999c.00000149 3.3137015 2.68629149 6.0000015 6 6h9.99999999v2z" fillRule="nonzero"/><path d="m25 50c-3.866 0-7-3.134-7-7v-18c0-3.866 3.134-7 7-7h18c3.866 0 7 3.134 7 7v11h-2v-11c0-2.7614-2.2386-5-5-5h-18c-2.7614 0-5 2.2386-5 5v18c0 2.7614 2.2386 5 5 5h11v2z" fillRule="nonzero"/><path d="m42 58c-3.3137 0-6-2.6863-6-6v-10c0-3.3137 2.6863-6 6-6h10c3.3137 0 6 2.6863 6 6v10c0 3.3137-2.6863 6-6 6zm-4-6c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4v-10c0-2.2091-1.7909-4-4-4h-10c-2.2091 0-4 1.7909-4 4z"/><circle cx="47" cy="47" fillRule="nonzero" r="2"/></g></g></svg>
            </div>
            <div className={style.title}>Platforms</div>
            <div className={style.desc}>Combine mobile and web products in one system and support successful growth by marketing websites. </div>
          </div>
          <div className={style.item} tabIndex='-1'>
            <div className={style.icon}>
              <svg height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="m0 0h60v60h-60z" fill="#d8d8d8" opacity="0"/><g transform="translate(3 14)"><path d="m23 0h-16c-3.86599 0-7 3.13401-7 7v30c0 3.866 3.13401 7 7 7h16c3.866 0 7-3.134 7-7v-30c0-3.86599-3.134-7-7-7z" stroke="#393939" strokeWidth="2"/><circle cx="15" cy="36" fill="#393939" fillRule="nonzero" r="2"/></g></g></svg>
            </div>
            <div className={style.title}>Mobile applications</div>
            <div className={style.desc}>Give your customers maximum convenience of interaction with your service and minimum time to make a key action</div>
          </div>
          <div className={style.item} tabIndex='-1'> 
            <div className={style.icon}>
            <svg height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="m0 0h60v60h-60z" fill="#fff" opacity="0"/><g transform="translate(1 14)"><path d="m51.2333333 0h-44.46666663c-3.73712367 0-6.76666667 3.029543-6.76666667 6.76666667v29.00000003c0 3.7371333 3.029543 6.7666666 6.76666667 6.7666666h44.46666663c3.7371334 0 6.7666667-3.0295333 6.7666667-6.7666666v-29.00000003c0-3.73712367-3.0295333-6.76666667-6.7666667-6.76666667z" stroke="#393939" strokeWidth="2"/><g fill="#393939" fillRule="nonzero"><circle cx="7.733333" cy="7.733333" r="1.933333"/><circle cx="14.5" cy="7.733333" r="1.933333"/><circle cx="21.266667" cy="7.733333" r="1.933333"/></g></g></g></svg>
            </div>
            <div className={style.title}>Web applications</div>
            <div className={style.desc}>
                Fast and responsive and user-oriented, delivering the best user experience & leading to higher engagement.
            </div>
          </div>
          <div className={style.item} tabIndex='-1'>
            <div className={style.icon}>
            <svg height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="m.5.5h59v59h-59z" fill="#d8d8d8" opacity="0" stroke="#979797"/><path d="m31 11.68v-3.68c0-1.85651543-.7374979-3.63699282-2.0502525-4.94974747-1.3127547-1.31275465-3.0932321-2.05025253-4.9497475-2.05025253h-16c-3.86599325 0-7 3.13400675-7 7v30c0 3.8659932 3.13400675 7 7 7h11.3" stroke="#393939" strokeWidth="2"/><path d="m42.58 11.1h-16c-3.8659932 0-7 3.1340068-7 7v30c0 3.8659932 3.1340068 7 7 7h16c3.8659932 0 7-3.1340068 7-7v-30c0-3.8659932-3.1340068-7-7-7z" stroke="#393939" strokeWidth="2"/><g fill="#393939" fillRule="nonzero"><circle cx="27.58" cy="23.1" r="2"/><circle cx="27.58" cy="33.1" r="2"/><circle cx="27.58" cy="43.1" r="2"/></g></g></svg>
            </div>
            <div className={style.title}>Landing pages</div>
            <div className={style.desc}>
              Allow for conversion increase through precise messaging, deliver a value proposition that reaches a customer.
            </div>
          </div>
          <div className={style.item} tabIndex='-1'>
            <div className={style.icon}>
            <svg height="60" viewBox="0 0 90 60" width="90" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="m.5.5h89v59h-89z" fill="#d8d8d8" opacity="0" stroke="#979797"/><g transform="translate(3 4)"><path d="m31 11.47v-3.47c0-3.86599325-3.1340068-7-7-7h-16c-3.86599325 0-7 3.13400675-7 7v30c0 3.8659932 3.13400675 7 7 7h11.79" stroke="#393939" strokeWidth="2"/><path d="m72 11h-46c-3.8659932 0-7 3.1340068-7 7v30c0 3.8659932 3.1340068 7 7 7h46c3.8659932 0 7-3.1340068 7-7v-30c0-3.8659932-3.1340068-7-7-7z" stroke="#393939" strokeWidth="2"/><g fill="#393939" fillRule="nonzero"><circle cx="31" cy="23" r="2"/><circle cx="31" cy="33" r="2"/><path d="m29 43c0-1.1045695.8954305-2 2-2s2 .8954305 2 2-.8954305 2-2 2-2-.8954305-2-2"/></g></g></g></svg>
            </div>
            <div className={style.title}>Marketing websites</div>
            <div className={style.desc}>Engage audiences with beautiful design & most importantly, convert users into customers.</div>
          </div>
          {/* <div className={style.item} tabIndex='-1'>
            <div className={style.icon}>
              <svg height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="m.5.5h59v59h-59z" fill="#d8d8d8" opacity="0" stroke="#979797"/><path d="m2 39h42l-15.333204-15" stroke="#393939"  strokeWidth="2"/></g></svg>
            </div>
            <div className={style.title}>
              Our method of
              <br /> creating the product
            </div>
          </div> */}
        </section>
      </>
    );
  }
}
