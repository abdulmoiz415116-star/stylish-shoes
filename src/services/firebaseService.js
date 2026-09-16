import { db, auth, isFirebaseConfigured } from '../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  getDocs
} from 'firebase/firestore';

export { isFirebaseConfigured };

// Collection References
const productsCol = collection(db, 'products');
const ordersCol = collection(db, 'orders');
const reviewsCol = collection(db, 'reviews');

/**
 * Real-time listener for Products in Cloud Firestore
 */
export const listenToProductsCloud = (callback) => {
  if (!isFirebaseConfigured()) {
    return () => {};
  }
  try {
    return onSnapshot(
      productsCol,
      (snapshot) => {
        const cloudProducts = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data()
        }));
        if (cloudProducts.length > 0) {
          callback(cloudProducts);
        }
      },
      (error) => {
        console.warn('Firestore Products Listen Warning:', error.message);
      }
    );
  } catch (err) {
    return () => {};
  }
};

/**
 * Save / Update Product in Cloud Firestore
 */
export const saveProductCloud = async (product) => {
  try {
    const prodRef = doc(db, 'products', product.id);
    await setDoc(prodRef, product, { merge: true });
  } catch (err) {
    console.warn('Firestore Product Save Warning:', err.message);
  }
};

/**
 * Update Product Stock in Cloud Firestore
 */
export const updateStockCloud = async (productId, newStock) => {
  try {
    const prodRef = doc(db, 'products', productId);
    await updateDoc(prodRef, {
      stockCount: newStock,
      inStock: newStock > 0
    });
  } catch (err) {
    console.warn('Firestore Stock Update Warning:', err.message);
  }
};

/**
 * Delete Product from Cloud Firestore
 */
export const deleteProductCloud = async (productId) => {
  try {
    const prodRef = doc(db, 'products', productId);
    await deleteDoc(prodRef);
  } catch (err) {
    console.warn('Firestore Product Delete Warning:', err.message);
  }
};

/**
 * Real-time listener for Orders in Cloud Firestore
 */
export const listenToOrdersCloud = (callback) => {
  if (!isFirebaseConfigured()) {
    return () => {};
  }
  try {
    return onSnapshot(
      ordersCol,
      (snapshot) => {
        const cloudOrders = snapshot.docs.map((docSnap) => ({
          orderId: docSnap.id,
          ...docSnap.data()
        }));
        if (cloudOrders.length > 0) {
          callback(cloudOrders);
        }
      },
      (error) => {
        console.warn('Firestore Orders Listen Warning:', error.message);
      }
    );
  } catch (err) {
    return () => {};
  }
};

/**
 * Save Order to Cloud Firestore
 */
export const saveOrderCloud = async (order) => {
  if (!isFirebaseConfigured()) return;
  try {
    const orderRef = doc(db, 'orders', order.orderId);
    await setDoc(orderRef, order, { merge: true });
  } catch (err) {
    console.warn('Firestore Order Save Warning:', err.message);
  }
};

/**
 * Update Order Status in Cloud Firestore
 */
export const updateOrderStatusCloud = async (orderId, status) => {
  if (!isFirebaseConfigured()) return;
  try {
    const orderRef = doc(db, 'orders', orderId);
    await updateDoc(orderRef, { status });
  } catch (err) {
    console.warn('Firestore Status Update Warning:', err.message);
  }
};

/**
 * Real-time listener for Reviews in Cloud Firestore
 */
export const listenToReviewsCloud = (callback) => {
  if (!isFirebaseConfigured()) {
    return () => {};
  }
  try {
    return onSnapshot(
      reviewsCol,
      (snapshot) => {
        const cloudReviews = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data()
        }));
        if (cloudReviews.length > 0) {
          callback(cloudReviews);
        }
      },
      (error) => {
        console.warn('Firestore Reviews Listen Warning:', error.message);
      }
    );
  } catch (err) {
    return () => {};
  }
};

/**
 * Save Review to Cloud Firestore
 */
export const saveReviewCloud = async (review) => {
  try {
    const revRef = doc(db, 'reviews', review.id);
    await setDoc(revRef, review, { merge: true });
  } catch (err) {
    console.warn('Firestore Review Save Warning:', err.message);
  }
};

/**
 * Delete Review from Cloud Firestore
 */
export const deleteReviewCloud = async (reviewId) => {
  try {
    const revRef = doc(db, 'reviews', reviewId);
    await deleteDoc(revRef);
  } catch (err) {
    console.warn('Firestore Review Delete Warning:', err.message);
  }
};

/**
 * Firebase Admin Cloud Authentication with Email & Password
 */
export const loginAdminCloud = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const logoutAdminCloud = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
