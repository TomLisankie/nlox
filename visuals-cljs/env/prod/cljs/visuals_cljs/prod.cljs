(ns visuals-cljs.prod
  (:require
    [visuals-cljs.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
