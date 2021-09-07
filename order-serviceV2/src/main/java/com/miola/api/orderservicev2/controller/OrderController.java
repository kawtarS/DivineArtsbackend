package com.miola.api.orderservicev2.controller;

import com.miola.api.orderservicev2.common.Payment;
import com.miola.api.orderservicev2.common.TransactionRequest;
import com.miola.api.orderservicev2.common.TransactionResponse;
import com.miola.api.orderservicev2.entity.Order;
import com.miola.api.orderservicev2.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/orders")
public class OrderController {

    @Autowired
    private OrderService service;

    @PostMapping("/productOrder")
    public TransactionResponse productOrder(@RequestBody TransactionRequest request){

        return service.saveOrder(request);
        //do a rest call to payment and pass the order id
    }


}
