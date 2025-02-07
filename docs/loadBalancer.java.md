# `loadBalancer` Submodule <a name="`loadBalancer` Submodule" id="@cdktf/provider-cloudflare.loadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancer <a name="LoadBalancer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer cloudflare_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancer;

LoadBalancer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .defaultPools(java.util.List<java.lang.String>)
    .fallbackPool(java.lang.String)
    .name(java.lang.String)
    .zoneId(java.lang.String)
//  .adaptiveRouting(LoadBalancerAdaptiveRouting)
//  .countryPools(IResolvable)
//  .countryPools(java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .locationStrategy(LoadBalancerLocationStrategy)
//  .networks(java.util.List<java.lang.String>)
//  .popPools(IResolvable)
//  .popPools(java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .proxied(java.lang.Boolean)
//  .proxied(IResolvable)
//  .randomSteering(LoadBalancerRandomSteering)
//  .regionPools(IResolvable)
//  .regionPools(java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .rules(IResolvable)
//  .rules(java.util.List<LoadBalancerRules>)
//  .sessionAffinity(java.lang.String)
//  .sessionAffinityAttributes(LoadBalancerSessionAffinityAttributes)
//  .sessionAffinityTtl(java.lang.Number)
//  .steeringPolicy(java.lang.String)
//  .ttl(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.defaultPools">defaultPools</a></code> | <code>java.util.List<java.lang.String></code> | A list of pool IDs ordered by their failover priority. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.fallbackPool">fallbackPool</a></code> | <code>java.lang.String</code> | The pool ID to use when all other pools are detected as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The DNS hostname to associate with your Load Balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#zone_id LoadBalancer#zone_id}. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.adaptiveRouting">adaptiveRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a></code> | Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.countryPools">countryPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Object description. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable (the default) this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.locationStrategy">locationStrategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a></code> | Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.networks">networks</a></code> | <code>java.util.List<java.lang.String></code> | List of networks where Load Balancer or Pool is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.popPools">popPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.proxied">proxied</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the hostname should be gray clouded (false) or orange clouded (true). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.randomSteering">randomSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a></code> | Configures pool weights. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.regionPools">regionPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>></code> | BETA Field Not General Access: A list of rules for this load balancer to execute. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | Specifies the type of session affinity the load balancer should use unless specified as `"none"`. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.sessionAffinityAttributes">sessionAffinityAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a></code> | Configures attributes for session affinity. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.sessionAffinityTtl">sessionAffinityTtl</a></code> | <code>java.lang.Number</code> | Time, in seconds, until a client's session expires after being created. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.steeringPolicy">steeringPolicy</a></code> | <code>java.lang.String</code> | Steering Policy for this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultPools`<sup>Required</sup> <a name="defaultPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.defaultPools"></a>

- *Type:* java.util.List<java.lang.String>

A list of pool IDs ordered by their failover priority.

Pools defined here are used by default, or when region_pools are not configured for a given region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#default_pools LoadBalancer#default_pools}

---

##### `fallbackPool`<sup>Required</sup> <a name="fallbackPool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.fallbackPool"></a>

- *Type:* java.lang.String

The pool ID to use when all other pools are detected as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#fallback_pool LoadBalancer#fallback_pool}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The DNS hostname to associate with your Load Balancer.

If this hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer will take precedence and the DNS record will not be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#name LoadBalancer#name}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#zone_id LoadBalancer#zone_id}.

---

##### `adaptiveRouting`<sup>Optional</sup> <a name="adaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.adaptiveRouting"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a>

Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests.

For example, zero-downtime failover occurs immediately when an origin becomes unavailable due to HTTP 521, 522, or 523 response codes. If there is another healthy origin in the same pool, the request is retried once against this alternate origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#adaptive_routing LoadBalancer#adaptive_routing}

---

##### `countryPools`<sup>Optional</sup> <a name="countryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.countryPools"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country.

Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#country_pools LoadBalancer#country_pools}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Object description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#description LoadBalancer#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable (the default) this load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#enabled LoadBalancer#enabled}

---

##### `locationStrategy`<sup>Optional</sup> <a name="locationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.locationStrategy"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a>

Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#location_strategy LoadBalancer#location_strategy}

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.networks"></a>

- *Type:* java.util.List<java.lang.String>

List of networks where Load Balancer or Pool is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#networks LoadBalancer#networks}

---

##### `popPools`<sup>Optional</sup> <a name="popPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.popPools"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

(Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter).

Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#pop_pools LoadBalancer#pop_pools}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.proxied"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the hostname should be gray clouded (false) or orange clouded (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#proxied LoadBalancer#proxied}

---

##### `randomSteering`<sup>Optional</sup> <a name="randomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.randomSteering"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a>

Configures pool weights.

* `steering_policy="random"`: A random pool is selected with probability proportional to pool weights.
* `steering_policy="least_outstanding_requests"`: Use pool weights to scale each pool's outstanding requests.
* `steering_policy="least_connections"`: Use pool weights to scale each pool's open connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#random_steering LoadBalancer#random_steering}

---

##### `regionPools`<sup>Optional</sup> <a name="regionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.regionPools"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region.

Any regions not explicitly defined will fall back to using default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#region_pools LoadBalancer#region_pools}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.rules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>>

BETA Field Not General Access: A list of rules for this load balancer to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#rules LoadBalancer#rules}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.sessionAffinity"></a>

- *Type:* java.lang.String

Specifies the type of session affinity the load balancer should use unless specified as `"none"`.

The supported types are:

* `"cookie"`: On the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy, then a new origin server is calculated and used.
* `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin selection is stable and based on the client's ip address.
* `"header"`: On the first request to a proxied load balancer, a session key based on the configured HTTP headers (see `session_affinity_attributes.headers`) is generated, encoding the request headers used for storing in the load balancer session state which origin the request will be forwarded to. Subsequent requests to the load balancer with the same headers will be sent to the same origin server, for the duration of the session and as long as the origin server remains healthy. If the session has been idle for the duration of `session_affinity_ttl` seconds or the origin server is unhealthy, then a new origin server is calculated and used. See `headers` in `session_affinity_attributes` for additional required configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#session_affinity LoadBalancer#session_affinity}

---

##### `sessionAffinityAttributes`<sup>Optional</sup> <a name="sessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.sessionAffinityAttributes"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a>

Configures attributes for session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}

---

##### `sessionAffinityTtl`<sup>Optional</sup> <a name="sessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.sessionAffinityTtl"></a>

- *Type:* java.lang.Number

Time, in seconds, until a client's session expires after being created.

Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are:

* `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800].
* `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}

---

##### `steeringPolicy`<sup>Optional</sup> <a name="steeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.steeringPolicy"></a>

- *Type:* java.lang.String

Steering Policy for this load balancer.

* `"off"`: Use `default_pools`.
* `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
* `"random"`: Select a pool randomly.
* `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
* `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
* `"least_outstanding_requests"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others.
* `"least_connections"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
* `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#steering_policy LoadBalancer#steering_policy}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

Time to live (TTL) of the DNS entry for the IP address returned by this load balancer.

This only applies to gray-clouded (unproxied) load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#ttl LoadBalancer#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putAdaptiveRouting">putAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putLocationStrategy">putLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRandomSteering">putRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putSessionAffinityAttributes">putSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetAdaptiveRouting">resetAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetCountryPools">resetCountryPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetLocationStrategy">resetLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetNetworks">resetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetPopPools">resetPopPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetProxied">resetProxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRandomSteering">resetRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRegionPools">resetRegionPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinity">resetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinityAttributes">resetSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinityTtl">resetSessionAffinityTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSteeringPolicy">resetSteeringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdaptiveRouting` <a name="putAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putAdaptiveRouting"></a>

```java
public void putAdaptiveRouting(LoadBalancerAdaptiveRouting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putAdaptiveRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a>

---

##### `putLocationStrategy` <a name="putLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putLocationStrategy"></a>

```java
public void putLocationStrategy(LoadBalancerLocationStrategy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putLocationStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a>

---

##### `putRandomSteering` <a name="putRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRandomSteering"></a>

```java
public void putRandomSteering(LoadBalancerRandomSteering value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRandomSteering.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a>

---

##### `putRules` <a name="putRules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<LoadBalancerRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>>

---

##### `putSessionAffinityAttributes` <a name="putSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putSessionAffinityAttributes"></a>

```java
public void putSessionAffinityAttributes(LoadBalancerSessionAffinityAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putSessionAffinityAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a>

---

##### `resetAdaptiveRouting` <a name="resetAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetAdaptiveRouting"></a>

```java
public void resetAdaptiveRouting()
```

##### `resetCountryPools` <a name="resetCountryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetCountryPools"></a>

```java
public void resetCountryPools()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetLocationStrategy` <a name="resetLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetLocationStrategy"></a>

```java
public void resetLocationStrategy()
```

##### `resetNetworks` <a name="resetNetworks" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetNetworks"></a>

```java
public void resetNetworks()
```

##### `resetPopPools` <a name="resetPopPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetPopPools"></a>

```java
public void resetPopPools()
```

##### `resetProxied` <a name="resetProxied" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetProxied"></a>

```java
public void resetProxied()
```

##### `resetRandomSteering` <a name="resetRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRandomSteering"></a>

```java
public void resetRandomSteering()
```

##### `resetRegionPools` <a name="resetRegionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRegionPools"></a>

```java
public void resetRegionPools()
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRules"></a>

```java
public void resetRules()
```

##### `resetSessionAffinity` <a name="resetSessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinity"></a>

```java
public void resetSessionAffinity()
```

##### `resetSessionAffinityAttributes` <a name="resetSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinityAttributes"></a>

```java
public void resetSessionAffinityAttributes()
```

##### `resetSessionAffinityTtl` <a name="resetSessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinityTtl"></a>

```java
public void resetSessionAffinityTtl()
```

##### `resetSteeringPolicy` <a name="resetSteeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSteeringPolicy"></a>

```java
public void resetSteeringPolicy()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancer;

LoadBalancer.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancer;

LoadBalancer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancer;

LoadBalancer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancer;

LoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LoadBalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LoadBalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.adaptiveRouting">adaptiveRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference">LoadBalancerAdaptiveRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.locationStrategy">locationStrategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference">LoadBalancerLocationStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.randomSteering">randomSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference">LoadBalancerRandomSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList">LoadBalancerRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityAttributes">sessionAffinityAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference">LoadBalancerSessionAffinityAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.adaptiveRoutingInput">adaptiveRoutingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.countryPoolsInput">countryPoolsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.defaultPoolsInput">defaultPoolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fallbackPoolInput">fallbackPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.locationStrategyInput">locationStrategyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.networksInput">networksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.popPoolsInput">popPoolsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.proxiedInput">proxiedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.randomSteeringInput">randomSteeringInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.regionPoolsInput">regionPoolsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityAttributesInput">sessionAffinityAttributesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityInput">sessionAffinityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityTtlInput">sessionAffinityTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.steeringPolicyInput">steeringPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.countryPools">countryPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.defaultPools">defaultPools</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fallbackPool">fallbackPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.networks">networks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.popPools">popPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.proxied">proxied</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.regionPools">regionPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityTtl">sessionAffinityTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.steeringPolicy">steeringPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adaptiveRouting`<sup>Required</sup> <a name="adaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.adaptiveRouting"></a>

```java
public LoadBalancerAdaptiveRoutingOutputReference getAdaptiveRouting();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference">LoadBalancerAdaptiveRoutingOutputReference</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationStrategy`<sup>Required</sup> <a name="locationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.locationStrategy"></a>

```java
public LoadBalancerLocationStrategyOutputReference getLocationStrategy();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference">LoadBalancerLocationStrategyOutputReference</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `randomSteering`<sup>Required</sup> <a name="randomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.randomSteering"></a>

```java
public LoadBalancerRandomSteeringOutputReference getRandomSteering();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference">LoadBalancerRandomSteeringOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.rules"></a>

```java
public LoadBalancerRulesList getRules();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList">LoadBalancerRulesList</a>

---

##### `sessionAffinityAttributes`<sup>Required</sup> <a name="sessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityAttributes"></a>

```java
public LoadBalancerSessionAffinityAttributesOutputReference getSessionAffinityAttributes();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference">LoadBalancerSessionAffinityAttributesOutputReference</a>

---

##### `adaptiveRoutingInput`<sup>Optional</sup> <a name="adaptiveRoutingInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.adaptiveRoutingInput"></a>

```java
public java.lang.Object getAdaptiveRoutingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a>

---

##### `countryPoolsInput`<sup>Optional</sup> <a name="countryPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.countryPoolsInput"></a>

```java
public java.lang.Object getCountryPoolsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `defaultPoolsInput`<sup>Optional</sup> <a name="defaultPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.defaultPoolsInput"></a>

```java
public java.util.List<java.lang.String> getDefaultPoolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fallbackPoolInput`<sup>Optional</sup> <a name="fallbackPoolInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fallbackPoolInput"></a>

```java
public java.lang.String getFallbackPoolInput();
```

- *Type:* java.lang.String

---

##### `locationStrategyInput`<sup>Optional</sup> <a name="locationStrategyInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.locationStrategyInput"></a>

```java
public java.lang.Object getLocationStrategyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.networksInput"></a>

```java
public java.util.List<java.lang.String> getNetworksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `popPoolsInput`<sup>Optional</sup> <a name="popPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.popPoolsInput"></a>

```java
public java.lang.Object getPopPoolsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `proxiedInput`<sup>Optional</sup> <a name="proxiedInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.proxiedInput"></a>

```java
public java.lang.Object getProxiedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `randomSteeringInput`<sup>Optional</sup> <a name="randomSteeringInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.randomSteeringInput"></a>

```java
public java.lang.Object getRandomSteeringInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a>

---

##### `regionPoolsInput`<sup>Optional</sup> <a name="regionPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.regionPoolsInput"></a>

```java
public java.lang.Object getRegionPoolsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>>

---

##### `sessionAffinityAttributesInput`<sup>Optional</sup> <a name="sessionAffinityAttributesInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityAttributesInput"></a>

```java
public java.lang.Object getSessionAffinityAttributesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a>

---

##### `sessionAffinityInput`<sup>Optional</sup> <a name="sessionAffinityInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityInput"></a>

```java
public java.lang.String getSessionAffinityInput();
```

- *Type:* java.lang.String

---

##### `sessionAffinityTtlInput`<sup>Optional</sup> <a name="sessionAffinityTtlInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityTtlInput"></a>

```java
public java.lang.Number getSessionAffinityTtlInput();
```

- *Type:* java.lang.Number

---

##### `steeringPolicyInput`<sup>Optional</sup> <a name="steeringPolicyInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.steeringPolicyInput"></a>

```java
public java.lang.String getSteeringPolicyInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `countryPools`<sup>Required</sup> <a name="countryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.countryPools"></a>

```java
public java.lang.Object getCountryPools();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `defaultPools`<sup>Required</sup> <a name="defaultPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.defaultPools"></a>

```java
public java.util.List<java.lang.String> getDefaultPools();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fallbackPool`<sup>Required</sup> <a name="fallbackPool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fallbackPool"></a>

```java
public java.lang.String getFallbackPool();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.networks"></a>

```java
public java.util.List<java.lang.String> getNetworks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `popPools`<sup>Required</sup> <a name="popPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.popPools"></a>

```java
public java.lang.Object getPopPools();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `proxied`<sup>Required</sup> <a name="proxied" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.proxied"></a>

```java
public java.lang.Object getProxied();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionPools`<sup>Required</sup> <a name="regionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.regionPools"></a>

```java
public java.lang.Object getRegionPools();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinity"></a>

```java
public java.lang.String getSessionAffinity();
```

- *Type:* java.lang.String

---

##### `sessionAffinityTtl`<sup>Required</sup> <a name="sessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityTtl"></a>

```java
public java.lang.Number getSessionAffinityTtl();
```

- *Type:* java.lang.Number

---

##### `steeringPolicy`<sup>Required</sup> <a name="steeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.steeringPolicy"></a>

```java
public java.lang.String getSteeringPolicy();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerAdaptiveRouting <a name="LoadBalancerAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerAdaptiveRouting;

LoadBalancerAdaptiveRouting.builder()
//  .failoverAcrossPools(java.lang.Boolean)
//  .failoverAcrossPools(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting.property.failoverAcrossPools">failoverAcrossPools</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering. |

---

##### `failoverAcrossPools`<sup>Optional</sup> <a name="failoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting.property.failoverAcrossPools"></a>

```java
public java.lang.Object getFailoverAcrossPools();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering.

When set false (the default) zero-downtime failover will only occur between origins within the same pool. See `session_affinity_attributes` for control over when sessions are broken or reassigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#failover_across_pools LoadBalancer#failover_across_pools}

---

### LoadBalancerConfig <a name="LoadBalancerConfig" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerConfig;

LoadBalancerConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .defaultPools(java.util.List<java.lang.String>)
    .fallbackPool(java.lang.String)
    .name(java.lang.String)
    .zoneId(java.lang.String)
//  .adaptiveRouting(LoadBalancerAdaptiveRouting)
//  .countryPools(IResolvable)
//  .countryPools(java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .locationStrategy(LoadBalancerLocationStrategy)
//  .networks(java.util.List<java.lang.String>)
//  .popPools(IResolvable)
//  .popPools(java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .proxied(java.lang.Boolean)
//  .proxied(IResolvable)
//  .randomSteering(LoadBalancerRandomSteering)
//  .regionPools(IResolvable)
//  .regionPools(java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .rules(IResolvable)
//  .rules(java.util.List<LoadBalancerRules>)
//  .sessionAffinity(java.lang.String)
//  .sessionAffinityAttributes(LoadBalancerSessionAffinityAttributes)
//  .sessionAffinityTtl(java.lang.Number)
//  .steeringPolicy(java.lang.String)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.defaultPools">defaultPools</a></code> | <code>java.util.List<java.lang.String></code> | A list of pool IDs ordered by their failover priority. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.fallbackPool">fallbackPool</a></code> | <code>java.lang.String</code> | The pool ID to use when all other pools are detected as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.name">name</a></code> | <code>java.lang.String</code> | The DNS hostname to associate with your Load Balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#zone_id LoadBalancer#zone_id}. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.adaptiveRouting">adaptiveRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a></code> | Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.countryPools">countryPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.description">description</a></code> | <code>java.lang.String</code> | Object description. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable (the default) this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.locationStrategy">locationStrategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a></code> | Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.networks">networks</a></code> | <code>java.util.List<java.lang.String></code> | List of networks where Load Balancer or Pool is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.popPools">popPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.proxied">proxied</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the hostname should be gray clouded (false) or orange clouded (true). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.randomSteering">randomSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a></code> | Configures pool weights. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.regionPools">regionPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>></code> | BETA Field Not General Access: A list of rules for this load balancer to execute. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | Specifies the type of session affinity the load balancer should use unless specified as `"none"`. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinityAttributes">sessionAffinityAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a></code> | Configures attributes for session affinity. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinityTtl">sessionAffinityTtl</a></code> | <code>java.lang.Number</code> | Time, in seconds, until a client's session expires after being created. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.steeringPolicy">steeringPolicy</a></code> | <code>java.lang.String</code> | Steering Policy for this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultPools`<sup>Required</sup> <a name="defaultPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.defaultPools"></a>

```java
public java.util.List<java.lang.String> getDefaultPools();
```

- *Type:* java.util.List<java.lang.String>

A list of pool IDs ordered by their failover priority.

Pools defined here are used by default, or when region_pools are not configured for a given region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#default_pools LoadBalancer#default_pools}

---

##### `fallbackPool`<sup>Required</sup> <a name="fallbackPool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.fallbackPool"></a>

```java
public java.lang.String getFallbackPool();
```

- *Type:* java.lang.String

The pool ID to use when all other pools are detected as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#fallback_pool LoadBalancer#fallback_pool}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The DNS hostname to associate with your Load Balancer.

If this hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer will take precedence and the DNS record will not be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#name LoadBalancer#name}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#zone_id LoadBalancer#zone_id}.

---

##### `adaptiveRouting`<sup>Optional</sup> <a name="adaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.adaptiveRouting"></a>

```java
public LoadBalancerAdaptiveRouting getAdaptiveRouting();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a>

Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests.

For example, zero-downtime failover occurs immediately when an origin becomes unavailable due to HTTP 521, 522, or 523 response codes. If there is another healthy origin in the same pool, the request is retried once against this alternate origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#adaptive_routing LoadBalancer#adaptive_routing}

---

##### `countryPools`<sup>Optional</sup> <a name="countryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.countryPools"></a>

```java
public java.lang.Object getCountryPools();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country.

Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#country_pools LoadBalancer#country_pools}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Object description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#description LoadBalancer#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable (the default) this load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#enabled LoadBalancer#enabled}

---

##### `locationStrategy`<sup>Optional</sup> <a name="locationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.locationStrategy"></a>

```java
public LoadBalancerLocationStrategy getLocationStrategy();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a>

Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#location_strategy LoadBalancer#location_strategy}

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.networks"></a>

```java
public java.util.List<java.lang.String> getNetworks();
```

- *Type:* java.util.List<java.lang.String>

List of networks where Load Balancer or Pool is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#networks LoadBalancer#networks}

---

##### `popPools`<sup>Optional</sup> <a name="popPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.popPools"></a>

```java
public java.lang.Object getPopPools();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

(Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter).

Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#pop_pools LoadBalancer#pop_pools}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.proxied"></a>

```java
public java.lang.Object getProxied();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the hostname should be gray clouded (false) or orange clouded (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#proxied LoadBalancer#proxied}

---

##### `randomSteering`<sup>Optional</sup> <a name="randomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.randomSteering"></a>

```java
public LoadBalancerRandomSteering getRandomSteering();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a>

Configures pool weights.

* `steering_policy="random"`: A random pool is selected with probability proportional to pool weights.
* `steering_policy="least_outstanding_requests"`: Use pool weights to scale each pool's outstanding requests.
* `steering_policy="least_connections"`: Use pool weights to scale each pool's open connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#random_steering LoadBalancer#random_steering}

---

##### `regionPools`<sup>Optional</sup> <a name="regionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.regionPools"></a>

```java
public java.lang.Object getRegionPools();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region.

Any regions not explicitly defined will fall back to using default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#region_pools LoadBalancer#region_pools}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>>

BETA Field Not General Access: A list of rules for this load balancer to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#rules LoadBalancer#rules}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinity"></a>

```java
public java.lang.String getSessionAffinity();
```

- *Type:* java.lang.String

Specifies the type of session affinity the load balancer should use unless specified as `"none"`.

The supported types are:

* `"cookie"`: On the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy, then a new origin server is calculated and used.
* `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin selection is stable and based on the client's ip address.
* `"header"`: On the first request to a proxied load balancer, a session key based on the configured HTTP headers (see `session_affinity_attributes.headers`) is generated, encoding the request headers used for storing in the load balancer session state which origin the request will be forwarded to. Subsequent requests to the load balancer with the same headers will be sent to the same origin server, for the duration of the session and as long as the origin server remains healthy. If the session has been idle for the duration of `session_affinity_ttl` seconds or the origin server is unhealthy, then a new origin server is calculated and used. See `headers` in `session_affinity_attributes` for additional required configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#session_affinity LoadBalancer#session_affinity}

---

##### `sessionAffinityAttributes`<sup>Optional</sup> <a name="sessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinityAttributes"></a>

```java
public LoadBalancerSessionAffinityAttributes getSessionAffinityAttributes();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a>

Configures attributes for session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}

---

##### `sessionAffinityTtl`<sup>Optional</sup> <a name="sessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinityTtl"></a>

```java
public java.lang.Number getSessionAffinityTtl();
```

- *Type:* java.lang.Number

Time, in seconds, until a client's session expires after being created.

Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are:

* `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800].
* `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}

---

##### `steeringPolicy`<sup>Optional</sup> <a name="steeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.steeringPolicy"></a>

```java
public java.lang.String getSteeringPolicy();
```

- *Type:* java.lang.String

Steering Policy for this load balancer.

* `"off"`: Use `default_pools`.
* `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
* `"random"`: Select a pool randomly.
* `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
* `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
* `"least_outstanding_requests"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others.
* `"least_connections"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
* `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#steering_policy LoadBalancer#steering_policy}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Time to live (TTL) of the DNS entry for the IP address returned by this load balancer.

This only applies to gray-clouded (unproxied) load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#ttl LoadBalancer#ttl}

---

### LoadBalancerLocationStrategy <a name="LoadBalancerLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerLocationStrategy;

LoadBalancerLocationStrategy.builder()
//  .mode(java.lang.String)
//  .preferEcs(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.property.mode">mode</a></code> | <code>java.lang.String</code> | Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.property.preferEcs">preferEcs</a></code> | <code>java.lang.String</code> | Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful.

* `"pop"`: Use the Cloudflare PoP location.
* `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is unsuccessful, use the Cloudflare PoP location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#mode LoadBalancer#mode}

---

##### `preferEcs`<sup>Optional</sup> <a name="preferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.property.preferEcs"></a>

```java
public java.lang.String getPreferEcs();
```

- *Type:* java.lang.String

Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location.

* `"always"`: Always prefer ECS.
* `"never"`: Never prefer ECS.
* `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
* `"geo"`: Prefer ECS only when `steering_policy="geo"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#prefer_ecs LoadBalancer#prefer_ecs}

---

### LoadBalancerRandomSteering <a name="LoadBalancerRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerRandomSteering;

LoadBalancerRandomSteering.builder()
//  .defaultWeight(java.lang.Number)
//  .poolWeights(java.util.Map<java.lang.String, java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.property.defaultWeight">defaultWeight</a></code> | <code>java.lang.Number</code> | The default weight for pools in the load balancer that are not specified in the pool_weights map. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.property.poolWeights">poolWeights</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer. |

---

##### `defaultWeight`<sup>Optional</sup> <a name="defaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.property.defaultWeight"></a>

```java
public java.lang.Number getDefaultWeight();
```

- *Type:* java.lang.Number

The default weight for pools in the load balancer that are not specified in the pool_weights map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#default_weight LoadBalancer#default_weight}

---

##### `poolWeights`<sup>Optional</sup> <a name="poolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.property.poolWeights"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getPoolWeights();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#pool_weights LoadBalancer#pool_weights}

---

### LoadBalancerRules <a name="LoadBalancerRules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerRules;

LoadBalancerRules.builder()
//  .condition(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .fixedResponse(LoadBalancerRulesFixedResponse)
//  .name(java.lang.String)
//  .overrides(LoadBalancerRulesOverrides)
//  .priority(java.lang.Number)
//  .terminates(java.lang.Boolean)
//  .terminates(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.condition">condition</a></code> | <code>java.lang.String</code> | The condition expressions to evaluate. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable this specific rule. It will no longer be evaluated by this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a></code> | A collection of fields used to directly respond to the eyeball instead of routing to a pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.name">name</a></code> | <code>java.lang.String</code> | Name of this rule. Only used for human readability. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a></code> | A collection of overrides to apply to the load balancer when this rule's condition is true. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.priority">priority</a></code> | <code>java.lang.Number</code> | The order in which rules should be executed in relation to each other. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.terminates">terminates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this rule's condition is true, this causes rule evaluation to stop after processing this rule. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

The condition expressions to evaluate.

If the condition evaluates to true, the overrides or fixed_response in this rule will be applied. An empty condition is always true. For more details on condition expressions, please see https://developers.cloudflare.com/load-balancing/understand-basics/load-balancing-rules/expressions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#condition LoadBalancer#condition}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable this specific rule. It will no longer be evaluated by this load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#disabled LoadBalancer#disabled}

---

##### `fixedResponse`<sup>Optional</sup> <a name="fixedResponse" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.fixedResponse"></a>

```java
public LoadBalancerRulesFixedResponse getFixedResponse();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a>

A collection of fields used to directly respond to the eyeball instead of routing to a pool.

If a fixed_response is supplied the rule will be marked as terminates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#fixed_response LoadBalancer#fixed_response}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of this rule. Only used for human readability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#name LoadBalancer#name}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.overrides"></a>

```java
public LoadBalancerRulesOverrides getOverrides();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a>

A collection of overrides to apply to the load balancer when this rule's condition is true.

All fields are optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#overrides LoadBalancer#overrides}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The order in which rules should be executed in relation to each other.

Lower values are executed first. Values do not need to be sequential. If no value is provided for any rule the array order of the rules field will be used to assign a priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#priority LoadBalancer#priority}

---

##### `terminates`<sup>Optional</sup> <a name="terminates" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.terminates"></a>

```java
public java.lang.Object getTerminates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this rule's condition is true, this causes rule evaluation to stop after processing this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#terminates LoadBalancer#terminates}

---

### LoadBalancerRulesFixedResponse <a name="LoadBalancerRulesFixedResponse" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerRulesFixedResponse;

LoadBalancerRulesFixedResponse.builder()
//  .contentType(java.lang.String)
//  .location(java.lang.String)
//  .messageBody(java.lang.String)
//  .statusCode(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.contentType">contentType</a></code> | <code>java.lang.String</code> | The http 'Content-Type' header to include in the response. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.location">location</a></code> | <code>java.lang.String</code> | The http 'Location' header to include in the response. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.messageBody">messageBody</a></code> | <code>java.lang.String</code> | Text to include as the http body. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | The http status code to respond with. |

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

The http 'Content-Type' header to include in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#content_type LoadBalancer#content_type}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The http 'Location' header to include in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#location LoadBalancer#location}

---

##### `messageBody`<sup>Optional</sup> <a name="messageBody" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.messageBody"></a>

```java
public java.lang.String getMessageBody();
```

- *Type:* java.lang.String

Text to include as the http body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#message_body LoadBalancer#message_body}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

The http status code to respond with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#status_code LoadBalancer#status_code}

---

### LoadBalancerRulesOverrides <a name="LoadBalancerRulesOverrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerRulesOverrides;

LoadBalancerRulesOverrides.builder()
//  .adaptiveRouting(LoadBalancerRulesOverridesAdaptiveRouting)
//  .countryPools(IResolvable)
//  .countryPools(java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .defaultPools(java.util.List<java.lang.String>)
//  .fallbackPool(java.lang.String)
//  .locationStrategy(LoadBalancerRulesOverridesLocationStrategy)
//  .popPools(IResolvable)
//  .popPools(java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .randomSteering(LoadBalancerRulesOverridesRandomSteering)
//  .regionPools(IResolvable)
//  .regionPools(java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .sessionAffinity(java.lang.String)
//  .sessionAffinityAttributes(LoadBalancerRulesOverridesSessionAffinityAttributes)
//  .sessionAffinityTtl(java.lang.Number)
//  .steeringPolicy(java.lang.String)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.adaptiveRouting">adaptiveRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a></code> | Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.countryPools">countryPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.defaultPools">defaultPools</a></code> | <code>java.util.List<java.lang.String></code> | A list of pool IDs ordered by their failover priority. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.fallbackPool">fallbackPool</a></code> | <code>java.lang.String</code> | The pool ID to use when all other pools are detected as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.locationStrategy">locationStrategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a></code> | Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.popPools">popPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | (Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.randomSteering">randomSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a></code> | Configures pool weights. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.regionPools">regionPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | Specifies the type of session affinity the load balancer should use unless specified as `"none"`. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinityAttributes">sessionAffinityAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a></code> | Configures attributes for session affinity. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinityTtl">sessionAffinityTtl</a></code> | <code>java.lang.Number</code> | Time, in seconds, until a client's session expires after being created. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.steeringPolicy">steeringPolicy</a></code> | <code>java.lang.String</code> | Steering Policy for this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. |

---

##### `adaptiveRouting`<sup>Optional</sup> <a name="adaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.adaptiveRouting"></a>

```java
public LoadBalancerRulesOverridesAdaptiveRouting getAdaptiveRouting();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a>

Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests.

For example, zero-downtime failover occurs immediately when an origin becomes unavailable due to HTTP 521, 522, or 523 response codes. If there is another healthy origin in the same pool, the request is retried once against this alternate origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#adaptive_routing LoadBalancer#adaptive_routing}

---

##### `countryPools`<sup>Optional</sup> <a name="countryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.countryPools"></a>

```java
public java.lang.Object getCountryPools();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country.

Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#country_pools LoadBalancer#country_pools}

---

##### `defaultPools`<sup>Optional</sup> <a name="defaultPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.defaultPools"></a>

```java
public java.util.List<java.lang.String> getDefaultPools();
```

- *Type:* java.util.List<java.lang.String>

A list of pool IDs ordered by their failover priority.

Pools defined here are used by default, or when region_pools are not configured for a given region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#default_pools LoadBalancer#default_pools}

---

##### `fallbackPool`<sup>Optional</sup> <a name="fallbackPool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.fallbackPool"></a>

```java
public java.lang.String getFallbackPool();
```

- *Type:* java.lang.String

The pool ID to use when all other pools are detected as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#fallback_pool LoadBalancer#fallback_pool}

---

##### `locationStrategy`<sup>Optional</sup> <a name="locationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.locationStrategy"></a>

```java
public LoadBalancerRulesOverridesLocationStrategy getLocationStrategy();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a>

Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#location_strategy LoadBalancer#location_strategy}

---

##### `popPools`<sup>Optional</sup> <a name="popPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.popPools"></a>

```java
public java.lang.Object getPopPools();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

(Enterprise only): A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter).

Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#pop_pools LoadBalancer#pop_pools}

---

##### `randomSteering`<sup>Optional</sup> <a name="randomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.randomSteering"></a>

```java
public LoadBalancerRulesOverridesRandomSteering getRandomSteering();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a>

Configures pool weights.

* `steering_policy="random"`: A random pool is selected with probability proportional to pool weights.
* `steering_policy="least_outstanding_requests"`: Use pool weights to scale each pool's outstanding requests.
* `steering_policy="least_connections"`: Use pool weights to scale each pool's open connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#random_steering LoadBalancer#random_steering}

---

##### `regionPools`<sup>Optional</sup> <a name="regionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.regionPools"></a>

```java
public java.lang.Object getRegionPools();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region.

Any regions not explicitly defined will fall back to using default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#region_pools LoadBalancer#region_pools}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinity"></a>

```java
public java.lang.String getSessionAffinity();
```

- *Type:* java.lang.String

Specifies the type of session affinity the load balancer should use unless specified as `"none"`.

The supported types are:

* `"cookie"`: On the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy, then a new origin server is calculated and used.
* `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin selection is stable and based on the client's ip address.
* `"header"`: On the first request to a proxied load balancer, a session key based on the configured HTTP headers (see `session_affinity_attributes.headers`) is generated, encoding the request headers used for storing in the load balancer session state which origin the request will be forwarded to. Subsequent requests to the load balancer with the same headers will be sent to the same origin server, for the duration of the session and as long as the origin server remains healthy. If the session has been idle for the duration of `session_affinity_ttl` seconds or the origin server is unhealthy, then a new origin server is calculated and used. See `headers` in `session_affinity_attributes` for additional required configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#session_affinity LoadBalancer#session_affinity}

---

##### `sessionAffinityAttributes`<sup>Optional</sup> <a name="sessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinityAttributes"></a>

```java
public LoadBalancerRulesOverridesSessionAffinityAttributes getSessionAffinityAttributes();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a>

Configures attributes for session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}

---

##### `sessionAffinityTtl`<sup>Optional</sup> <a name="sessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinityTtl"></a>

```java
public java.lang.Number getSessionAffinityTtl();
```

- *Type:* java.lang.Number

Time, in seconds, until a client's session expires after being created.

Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are:

* `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800].
* `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}

---

##### `steeringPolicy`<sup>Optional</sup> <a name="steeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.steeringPolicy"></a>

```java
public java.lang.String getSteeringPolicy();
```

- *Type:* java.lang.String

Steering Policy for this load balancer.

* `"off"`: Use `default_pools`.
* `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
* `"random"`: Select a pool randomly.
* `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
* `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
* `"least_outstanding_requests"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others.
* `"least_connections"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
* `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#steering_policy LoadBalancer#steering_policy}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Time to live (TTL) of the DNS entry for the IP address returned by this load balancer.

This only applies to gray-clouded (unproxied) load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#ttl LoadBalancer#ttl}

---

### LoadBalancerRulesOverridesAdaptiveRouting <a name="LoadBalancerRulesOverridesAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerRulesOverridesAdaptiveRouting;

LoadBalancerRulesOverridesAdaptiveRouting.builder()
//  .failoverAcrossPools(java.lang.Boolean)
//  .failoverAcrossPools(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting.property.failoverAcrossPools">failoverAcrossPools</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering. |

---

##### `failoverAcrossPools`<sup>Optional</sup> <a name="failoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting.property.failoverAcrossPools"></a>

```java
public java.lang.Object getFailoverAcrossPools();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering.

When set false (the default) zero-downtime failover will only occur between origins within the same pool. See `session_affinity_attributes` for control over when sessions are broken or reassigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#failover_across_pools LoadBalancer#failover_across_pools}

---

### LoadBalancerRulesOverridesLocationStrategy <a name="LoadBalancerRulesOverridesLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerRulesOverridesLocationStrategy;

LoadBalancerRulesOverridesLocationStrategy.builder()
//  .mode(java.lang.String)
//  .preferEcs(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.property.mode">mode</a></code> | <code>java.lang.String</code> | Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.property.preferEcs">preferEcs</a></code> | <code>java.lang.String</code> | Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful.

* `"pop"`: Use the Cloudflare PoP location.
* `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is unsuccessful, use the Cloudflare PoP location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#mode LoadBalancer#mode}

---

##### `preferEcs`<sup>Optional</sup> <a name="preferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.property.preferEcs"></a>

```java
public java.lang.String getPreferEcs();
```

- *Type:* java.lang.String

Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location.

* `"always"`: Always prefer ECS.
* `"never"`: Never prefer ECS.
* `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
* `"geo"`: Prefer ECS only when `steering_policy="geo"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#prefer_ecs LoadBalancer#prefer_ecs}

---

### LoadBalancerRulesOverridesRandomSteering <a name="LoadBalancerRulesOverridesRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerRulesOverridesRandomSteering;

LoadBalancerRulesOverridesRandomSteering.builder()
//  .defaultWeight(java.lang.Number)
//  .poolWeights(java.util.Map<java.lang.String, java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.property.defaultWeight">defaultWeight</a></code> | <code>java.lang.Number</code> | The default weight for pools in the load balancer that are not specified in the pool_weights map. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.property.poolWeights">poolWeights</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer. |

---

##### `defaultWeight`<sup>Optional</sup> <a name="defaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.property.defaultWeight"></a>

```java
public java.lang.Number getDefaultWeight();
```

- *Type:* java.lang.Number

The default weight for pools in the load balancer that are not specified in the pool_weights map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#default_weight LoadBalancer#default_weight}

---

##### `poolWeights`<sup>Optional</sup> <a name="poolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.property.poolWeights"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getPoolWeights();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#pool_weights LoadBalancer#pool_weights}

---

### LoadBalancerRulesOverridesSessionAffinityAttributes <a name="LoadBalancerRulesOverridesSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerRulesOverridesSessionAffinityAttributes;

LoadBalancerRulesOverridesSessionAffinityAttributes.builder()
//  .drainDuration(java.lang.Number)
//  .headers(java.util.List<java.lang.String>)
//  .requireAllHeaders(java.lang.Boolean)
//  .requireAllHeaders(IResolvable)
//  .samesite(java.lang.String)
//  .secure(java.lang.String)
//  .zeroDowntimeFailover(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.drainDuration">drainDuration</a></code> | <code>java.lang.Number</code> | Configures the drain duration in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.headers">headers</a></code> | <code>java.util.List<java.lang.String></code> | Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.requireAllHeaders">requireAllHeaders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.samesite">samesite</a></code> | <code>java.lang.String</code> | Configures the SameSite attribute on session affinity cookie. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.secure">secure</a></code> | <code>java.lang.String</code> | Configures the Secure attribute on session affinity cookie. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.zeroDowntimeFailover">zeroDowntimeFailover</a></code> | <code>java.lang.String</code> | Configures the zero-downtime failover between origins within a pool when session affinity is enabled. |

---

##### `drainDuration`<sup>Optional</sup> <a name="drainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.drainDuration"></a>

```java
public java.lang.Number getDrainDuration();
```

- *Type:* java.lang.Number

Configures the drain duration in seconds.

This field is only used when session affinity is enabled on the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#drain_duration LoadBalancer#drain_duration}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.headers"></a>

```java
public java.util.List<java.lang.String> getHeaders();
```

- *Type:* java.util.List<java.lang.String>

Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled.

At least one HTTP header name must be provided. To specify the exact cookies to be used, include an item in the following format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything after the colon is a comma-separated list of cookie names. Providing only `"cookie"` will result in all cookies being used. The default max number of HTTP header names that can be provided depends on your plan: 5 for Enterprise, 1 for all other plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#headers LoadBalancer#headers}

---

##### `requireAllHeaders`<sup>Optional</sup> <a name="requireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.requireAllHeaders"></a>

```java
public java.lang.Object getRequireAllHeaders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used.

The supported values are:

* `"true"`: Load balancing requests must contain *all* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.
* `"false"`: Load balancing requests must contain *at least one* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#require_all_headers LoadBalancer#require_all_headers}

---

##### `samesite`<sup>Optional</sup> <a name="samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.samesite"></a>

```java
public java.lang.String getSamesite();
```

- *Type:* java.lang.String

Configures the SameSite attribute on session affinity cookie.

Value "Auto" will be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note: when using value "None", the secure attribute can not be set to "Never".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#samesite LoadBalancer#samesite}

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.secure"></a>

```java
public java.lang.String getSecure();
```

- *Type:* java.lang.String

Configures the Secure attribute on session affinity cookie.

Value "Always" indicates the Secure attribute will be set in the Set-Cookie header, "Never" indicates the Secure attribute will not be set, and "Auto" will set the Secure attribute depending if Always Use HTTPS is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#secure LoadBalancer#secure}

---

##### `zeroDowntimeFailover`<sup>Optional</sup> <a name="zeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.zeroDowntimeFailover"></a>

```java
public java.lang.String getZeroDowntimeFailover();
```

- *Type:* java.lang.String

Configures the zero-downtime failover between origins within a pool when session affinity is enabled.

This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. The supported values are:

* `"none"`: No failover takes place for sessions pinned to the origin (default).
* `"temporary"`: Traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping.
* `"sticky"`: The session affinity cookie is updated and subsequent requests are sent to the new origin. Note: Zero-downtime failover with sticky sessions is currently not supported for session affinity by header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#zero_downtime_failover LoadBalancer#zero_downtime_failover}

---

### LoadBalancerSessionAffinityAttributes <a name="LoadBalancerSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerSessionAffinityAttributes;

LoadBalancerSessionAffinityAttributes.builder()
//  .drainDuration(java.lang.Number)
//  .headers(java.util.List<java.lang.String>)
//  .requireAllHeaders(java.lang.Boolean)
//  .requireAllHeaders(IResolvable)
//  .samesite(java.lang.String)
//  .secure(java.lang.String)
//  .zeroDowntimeFailover(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.drainDuration">drainDuration</a></code> | <code>java.lang.Number</code> | Configures the drain duration in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.headers">headers</a></code> | <code>java.util.List<java.lang.String></code> | Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.requireAllHeaders">requireAllHeaders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.samesite">samesite</a></code> | <code>java.lang.String</code> | Configures the SameSite attribute on session affinity cookie. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.secure">secure</a></code> | <code>java.lang.String</code> | Configures the Secure attribute on session affinity cookie. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.zeroDowntimeFailover">zeroDowntimeFailover</a></code> | <code>java.lang.String</code> | Configures the zero-downtime failover between origins within a pool when session affinity is enabled. |

---

##### `drainDuration`<sup>Optional</sup> <a name="drainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.drainDuration"></a>

```java
public java.lang.Number getDrainDuration();
```

- *Type:* java.lang.Number

Configures the drain duration in seconds.

This field is only used when session affinity is enabled on the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#drain_duration LoadBalancer#drain_duration}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.headers"></a>

```java
public java.util.List<java.lang.String> getHeaders();
```

- *Type:* java.util.List<java.lang.String>

Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled.

At least one HTTP header name must be provided. To specify the exact cookies to be used, include an item in the following format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything after the colon is a comma-separated list of cookie names. Providing only `"cookie"` will result in all cookies being used. The default max number of HTTP header names that can be provided depends on your plan: 5 for Enterprise, 1 for all other plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#headers LoadBalancer#headers}

---

##### `requireAllHeaders`<sup>Optional</sup> <a name="requireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.requireAllHeaders"></a>

```java
public java.lang.Object getRequireAllHeaders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used.

The supported values are:

* `"true"`: Load balancing requests must contain *all* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.
* `"false"`: Load balancing requests must contain *at least one* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#require_all_headers LoadBalancer#require_all_headers}

---

##### `samesite`<sup>Optional</sup> <a name="samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.samesite"></a>

```java
public java.lang.String getSamesite();
```

- *Type:* java.lang.String

Configures the SameSite attribute on session affinity cookie.

Value "Auto" will be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note: when using value "None", the secure attribute can not be set to "Never".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#samesite LoadBalancer#samesite}

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.secure"></a>

```java
public java.lang.String getSecure();
```

- *Type:* java.lang.String

Configures the Secure attribute on session affinity cookie.

Value "Always" indicates the Secure attribute will be set in the Set-Cookie header, "Never" indicates the Secure attribute will not be set, and "Auto" will set the Secure attribute depending if Always Use HTTPS is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#secure LoadBalancer#secure}

---

##### `zeroDowntimeFailover`<sup>Optional</sup> <a name="zeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.zeroDowntimeFailover"></a>

```java
public java.lang.String getZeroDowntimeFailover();
```

- *Type:* java.lang.String

Configures the zero-downtime failover between origins within a pool when session affinity is enabled.

This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. The supported values are:

* `"none"`: No failover takes place for sessions pinned to the origin (default).
* `"temporary"`: Traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping.
* `"sticky"`: The session affinity cookie is updated and subsequent requests are sent to the new origin. Note: Zero-downtime failover with sticky sessions is currently not supported for session affinity by header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/load_balancer#zero_downtime_failover LoadBalancer#zero_downtime_failover}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerAdaptiveRoutingOutputReference <a name="LoadBalancerAdaptiveRoutingOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerAdaptiveRoutingOutputReference;

new LoadBalancerAdaptiveRoutingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resetFailoverAcrossPools">resetFailoverAcrossPools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailoverAcrossPools` <a name="resetFailoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resetFailoverAcrossPools"></a>

```java
public void resetFailoverAcrossPools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.failoverAcrossPoolsInput">failoverAcrossPoolsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.failoverAcrossPools">failoverAcrossPools</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failoverAcrossPoolsInput`<sup>Optional</sup> <a name="failoverAcrossPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.failoverAcrossPoolsInput"></a>

```java
public java.lang.Object getFailoverAcrossPoolsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failoverAcrossPools`<sup>Required</sup> <a name="failoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.failoverAcrossPools"></a>

```java
public java.lang.Object getFailoverAcrossPools();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a>

---


### LoadBalancerLocationStrategyOutputReference <a name="LoadBalancerLocationStrategyOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerLocationStrategyOutputReference;

new LoadBalancerLocationStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resetPreferEcs">resetPreferEcs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetPreferEcs` <a name="resetPreferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resetPreferEcs"></a>

```java
public void resetPreferEcs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.preferEcsInput">preferEcsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.preferEcs">preferEcs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `preferEcsInput`<sup>Optional</sup> <a name="preferEcsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.preferEcsInput"></a>

```java
public java.lang.String getPreferEcsInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `preferEcs`<sup>Required</sup> <a name="preferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.preferEcs"></a>

```java
public java.lang.String getPreferEcs();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a>

---


### LoadBalancerRandomSteeringOutputReference <a name="LoadBalancerRandomSteeringOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerRandomSteeringOutputReference;

new LoadBalancerRandomSteeringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resetDefaultWeight">resetDefaultWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resetPoolWeights">resetPoolWeights</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultWeight` <a name="resetDefaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resetDefaultWeight"></a>

```java
public void resetDefaultWeight()
```

##### `resetPoolWeights` <a name="resetPoolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resetPoolWeights"></a>

```java
public void resetPoolWeights()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.defaultWeightInput">defaultWeightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.poolWeightsInput">poolWeightsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.defaultWeight">defaultWeight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.poolWeights">poolWeights</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultWeightInput`<sup>Optional</sup> <a name="defaultWeightInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.defaultWeightInput"></a>

```java
public java.lang.Number getDefaultWeightInput();
```

- *Type:* java.lang.Number

---

##### `poolWeightsInput`<sup>Optional</sup> <a name="poolWeightsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.poolWeightsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getPoolWeightsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `defaultWeight`<sup>Required</sup> <a name="defaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.defaultWeight"></a>

```java
public java.lang.Number getDefaultWeight();
```

- *Type:* java.lang.Number

---

##### `poolWeights`<sup>Required</sup> <a name="poolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.poolWeights"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getPoolWeights();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a>

---


### LoadBalancerRulesFixedResponseOutputReference <a name="LoadBalancerRulesFixedResponseOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerRulesFixedResponseOutputReference;

new LoadBalancerRulesFixedResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetMessageBody">resetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMessageBody` <a name="resetMessageBody" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetMessageBody"></a>

```java
public void resetMessageBody()
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetStatusCode"></a>

```java
public void resetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.messageBodyInput">messageBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.messageBody">messageBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `messageBodyInput`<sup>Optional</sup> <a name="messageBodyInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.messageBodyInput"></a>

```java
public java.lang.String getMessageBodyInput();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.statusCodeInput"></a>

```java
public java.lang.Number getStatusCodeInput();
```

- *Type:* java.lang.Number

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `messageBody`<sup>Required</sup> <a name="messageBody" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.messageBody"></a>

```java
public java.lang.String getMessageBody();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a>

---


### LoadBalancerRulesList <a name="LoadBalancerRulesList" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerRulesList;

new LoadBalancerRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.get"></a>

```java
public LoadBalancerRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>>

---


### LoadBalancerRulesOutputReference <a name="LoadBalancerRulesOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerRulesOutputReference;

new LoadBalancerRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putFixedResponse">putFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetFixedResponse">resetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetOverrides">resetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetTerminates">resetTerminates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFixedResponse` <a name="putFixedResponse" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putFixedResponse"></a>

```java
public void putFixedResponse(LoadBalancerRulesFixedResponse value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a>

---

##### `putOverrides` <a name="putOverrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides"></a>

```java
public void putOverrides(LoadBalancerRulesOverrides value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetFixedResponse` <a name="resetFixedResponse" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetFixedResponse"></a>

```java
public void resetFixedResponse()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOverrides` <a name="resetOverrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetOverrides"></a>

```java
public void resetOverrides()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetTerminates` <a name="resetTerminates" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetTerminates"></a>

```java
public void resetTerminates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference">LoadBalancerRulesFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference">LoadBalancerRulesOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fixedResponseInput">fixedResponseInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.overridesInput">overridesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.terminatesInput">terminatesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.terminates">terminates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fixedResponse`<sup>Required</sup> <a name="fixedResponse" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fixedResponse"></a>

```java
public LoadBalancerRulesFixedResponseOutputReference getFixedResponse();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference">LoadBalancerRulesFixedResponseOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.overrides"></a>

```java
public LoadBalancerRulesOverridesOutputReference getOverrides();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference">LoadBalancerRulesOverridesOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fixedResponseInput`<sup>Optional</sup> <a name="fixedResponseInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fixedResponseInput"></a>

```java
public java.lang.Object getFixedResponseInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.overridesInput"></a>

```java
public java.lang.Object getOverridesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `terminatesInput`<sup>Optional</sup> <a name="terminatesInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.terminatesInput"></a>

```java
public java.lang.Object getTerminatesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `terminates`<sup>Required</sup> <a name="terminates" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.terminates"></a>

```java
public java.lang.Object getTerminates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>

---


### LoadBalancerRulesOverridesAdaptiveRoutingOutputReference <a name="LoadBalancerRulesOverridesAdaptiveRoutingOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference;

new LoadBalancerRulesOverridesAdaptiveRoutingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resetFailoverAcrossPools">resetFailoverAcrossPools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailoverAcrossPools` <a name="resetFailoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resetFailoverAcrossPools"></a>

```java
public void resetFailoverAcrossPools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPoolsInput">failoverAcrossPoolsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPools">failoverAcrossPools</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failoverAcrossPoolsInput`<sup>Optional</sup> <a name="failoverAcrossPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPoolsInput"></a>

```java
public java.lang.Object getFailoverAcrossPoolsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failoverAcrossPools`<sup>Required</sup> <a name="failoverAcrossPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPools"></a>

```java
public java.lang.Object getFailoverAcrossPools();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a>

---


### LoadBalancerRulesOverridesLocationStrategyOutputReference <a name="LoadBalancerRulesOverridesLocationStrategyOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerRulesOverridesLocationStrategyOutputReference;

new LoadBalancerRulesOverridesLocationStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resetPreferEcs">resetPreferEcs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetPreferEcs` <a name="resetPreferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resetPreferEcs"></a>

```java
public void resetPreferEcs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.preferEcsInput">preferEcsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.preferEcs">preferEcs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `preferEcsInput`<sup>Optional</sup> <a name="preferEcsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.preferEcsInput"></a>

```java
public java.lang.String getPreferEcsInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `preferEcs`<sup>Required</sup> <a name="preferEcs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.preferEcs"></a>

```java
public java.lang.String getPreferEcs();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a>

---


### LoadBalancerRulesOverridesOutputReference <a name="LoadBalancerRulesOverridesOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerRulesOverridesOutputReference;

new LoadBalancerRulesOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putAdaptiveRouting">putAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putLocationStrategy">putLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putRandomSteering">putRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putSessionAffinityAttributes">putSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetAdaptiveRouting">resetAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetCountryPools">resetCountryPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetDefaultPools">resetDefaultPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetFallbackPool">resetFallbackPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetLocationStrategy">resetLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetPopPools">resetPopPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetRandomSteering">resetRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetRegionPools">resetRegionPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinity">resetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinityAttributes">resetSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinityTtl">resetSessionAffinityTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSteeringPolicy">resetSteeringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdaptiveRouting` <a name="putAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putAdaptiveRouting"></a>

```java
public void putAdaptiveRouting(LoadBalancerRulesOverridesAdaptiveRouting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putAdaptiveRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a>

---

##### `putLocationStrategy` <a name="putLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putLocationStrategy"></a>

```java
public void putLocationStrategy(LoadBalancerRulesOverridesLocationStrategy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putLocationStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a>

---

##### `putRandomSteering` <a name="putRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putRandomSteering"></a>

```java
public void putRandomSteering(LoadBalancerRulesOverridesRandomSteering value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putRandomSteering.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a>

---

##### `putSessionAffinityAttributes` <a name="putSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putSessionAffinityAttributes"></a>

```java
public void putSessionAffinityAttributes(LoadBalancerRulesOverridesSessionAffinityAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putSessionAffinityAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a>

---

##### `resetAdaptiveRouting` <a name="resetAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetAdaptiveRouting"></a>

```java
public void resetAdaptiveRouting()
```

##### `resetCountryPools` <a name="resetCountryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetCountryPools"></a>

```java
public void resetCountryPools()
```

##### `resetDefaultPools` <a name="resetDefaultPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetDefaultPools"></a>

```java
public void resetDefaultPools()
```

##### `resetFallbackPool` <a name="resetFallbackPool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetFallbackPool"></a>

```java
public void resetFallbackPool()
```

##### `resetLocationStrategy` <a name="resetLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetLocationStrategy"></a>

```java
public void resetLocationStrategy()
```

##### `resetPopPools` <a name="resetPopPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetPopPools"></a>

```java
public void resetPopPools()
```

##### `resetRandomSteering` <a name="resetRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetRandomSteering"></a>

```java
public void resetRandomSteering()
```

##### `resetRegionPools` <a name="resetRegionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetRegionPools"></a>

```java
public void resetRegionPools()
```

##### `resetSessionAffinity` <a name="resetSessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinity"></a>

```java
public void resetSessionAffinity()
```

##### `resetSessionAffinityAttributes` <a name="resetSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinityAttributes"></a>

```java
public void resetSessionAffinityAttributes()
```

##### `resetSessionAffinityTtl` <a name="resetSessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinityTtl"></a>

```java
public void resetSessionAffinityTtl()
```

##### `resetSteeringPolicy` <a name="resetSteeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSteeringPolicy"></a>

```java
public void resetSteeringPolicy()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetTtl"></a>

```java
public void resetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.adaptiveRouting">adaptiveRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference">LoadBalancerRulesOverridesAdaptiveRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.locationStrategy">locationStrategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference">LoadBalancerRulesOverridesLocationStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.randomSteering">randomSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference">LoadBalancerRulesOverridesRandomSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityAttributes">sessionAffinityAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference">LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.adaptiveRoutingInput">adaptiveRoutingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.countryPoolsInput">countryPoolsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.defaultPoolsInput">defaultPoolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fallbackPoolInput">fallbackPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.locationStrategyInput">locationStrategyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.popPoolsInput">popPoolsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.randomSteeringInput">randomSteeringInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.regionPoolsInput">regionPoolsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityAttributesInput">sessionAffinityAttributesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityInput">sessionAffinityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityTtlInput">sessionAffinityTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.steeringPolicyInput">steeringPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.countryPools">countryPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.defaultPools">defaultPools</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fallbackPool">fallbackPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.popPools">popPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.regionPools">regionPools</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityTtl">sessionAffinityTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.steeringPolicy">steeringPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adaptiveRouting`<sup>Required</sup> <a name="adaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.adaptiveRouting"></a>

```java
public LoadBalancerRulesOverridesAdaptiveRoutingOutputReference getAdaptiveRouting();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference">LoadBalancerRulesOverridesAdaptiveRoutingOutputReference</a>

---

##### `locationStrategy`<sup>Required</sup> <a name="locationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.locationStrategy"></a>

```java
public LoadBalancerRulesOverridesLocationStrategyOutputReference getLocationStrategy();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference">LoadBalancerRulesOverridesLocationStrategyOutputReference</a>

---

##### `randomSteering`<sup>Required</sup> <a name="randomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.randomSteering"></a>

```java
public LoadBalancerRulesOverridesRandomSteeringOutputReference getRandomSteering();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference">LoadBalancerRulesOverridesRandomSteeringOutputReference</a>

---

##### `sessionAffinityAttributes`<sup>Required</sup> <a name="sessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityAttributes"></a>

```java
public LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference getSessionAffinityAttributes();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference">LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference</a>

---

##### `adaptiveRoutingInput`<sup>Optional</sup> <a name="adaptiveRoutingInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.adaptiveRoutingInput"></a>

```java
public java.lang.Object getAdaptiveRoutingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a>

---

##### `countryPoolsInput`<sup>Optional</sup> <a name="countryPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.countryPoolsInput"></a>

```java
public java.lang.Object getCountryPoolsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `defaultPoolsInput`<sup>Optional</sup> <a name="defaultPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.defaultPoolsInput"></a>

```java
public java.util.List<java.lang.String> getDefaultPoolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fallbackPoolInput`<sup>Optional</sup> <a name="fallbackPoolInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fallbackPoolInput"></a>

```java
public java.lang.String getFallbackPoolInput();
```

- *Type:* java.lang.String

---

##### `locationStrategyInput`<sup>Optional</sup> <a name="locationStrategyInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.locationStrategyInput"></a>

```java
public java.lang.Object getLocationStrategyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a>

---

##### `popPoolsInput`<sup>Optional</sup> <a name="popPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.popPoolsInput"></a>

```java
public java.lang.Object getPopPoolsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `randomSteeringInput`<sup>Optional</sup> <a name="randomSteeringInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.randomSteeringInput"></a>

```java
public java.lang.Object getRandomSteeringInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a>

---

##### `regionPoolsInput`<sup>Optional</sup> <a name="regionPoolsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.regionPoolsInput"></a>

```java
public java.lang.Object getRegionPoolsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `sessionAffinityAttributesInput`<sup>Optional</sup> <a name="sessionAffinityAttributesInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityAttributesInput"></a>

```java
public java.lang.Object getSessionAffinityAttributesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a>

---

##### `sessionAffinityInput`<sup>Optional</sup> <a name="sessionAffinityInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityInput"></a>

```java
public java.lang.String getSessionAffinityInput();
```

- *Type:* java.lang.String

---

##### `sessionAffinityTtlInput`<sup>Optional</sup> <a name="sessionAffinityTtlInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityTtlInput"></a>

```java
public java.lang.Number getSessionAffinityTtlInput();
```

- *Type:* java.lang.Number

---

##### `steeringPolicyInput`<sup>Optional</sup> <a name="steeringPolicyInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.steeringPolicyInput"></a>

```java
public java.lang.String getSteeringPolicyInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `countryPools`<sup>Required</sup> <a name="countryPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.countryPools"></a>

```java
public java.lang.Object getCountryPools();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `defaultPools`<sup>Required</sup> <a name="defaultPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.defaultPools"></a>

```java
public java.util.List<java.lang.String> getDefaultPools();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fallbackPool`<sup>Required</sup> <a name="fallbackPool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fallbackPool"></a>

```java
public java.lang.String getFallbackPool();
```

- *Type:* java.lang.String

---

##### `popPools`<sup>Required</sup> <a name="popPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.popPools"></a>

```java
public java.lang.Object getPopPools();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `regionPools`<sup>Required</sup> <a name="regionPools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.regionPools"></a>

```java
public java.lang.Object getRegionPools();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinity"></a>

```java
public java.lang.String getSessionAffinity();
```

- *Type:* java.lang.String

---

##### `sessionAffinityTtl`<sup>Required</sup> <a name="sessionAffinityTtl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityTtl"></a>

```java
public java.lang.Number getSessionAffinityTtl();
```

- *Type:* java.lang.Number

---

##### `steeringPolicy`<sup>Required</sup> <a name="steeringPolicy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.steeringPolicy"></a>

```java
public java.lang.String getSteeringPolicy();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a>

---


### LoadBalancerRulesOverridesRandomSteeringOutputReference <a name="LoadBalancerRulesOverridesRandomSteeringOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerRulesOverridesRandomSteeringOutputReference;

new LoadBalancerRulesOverridesRandomSteeringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resetDefaultWeight">resetDefaultWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resetPoolWeights">resetPoolWeights</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultWeight` <a name="resetDefaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resetDefaultWeight"></a>

```java
public void resetDefaultWeight()
```

##### `resetPoolWeights` <a name="resetPoolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resetPoolWeights"></a>

```java
public void resetPoolWeights()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.defaultWeightInput">defaultWeightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.poolWeightsInput">poolWeightsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.defaultWeight">defaultWeight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.poolWeights">poolWeights</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultWeightInput`<sup>Optional</sup> <a name="defaultWeightInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.defaultWeightInput"></a>

```java
public java.lang.Number getDefaultWeightInput();
```

- *Type:* java.lang.Number

---

##### `poolWeightsInput`<sup>Optional</sup> <a name="poolWeightsInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.poolWeightsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getPoolWeightsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `defaultWeight`<sup>Required</sup> <a name="defaultWeight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.defaultWeight"></a>

```java
public java.lang.Number getDefaultWeight();
```

- *Type:* java.lang.Number

---

##### `poolWeights`<sup>Required</sup> <a name="poolWeights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.poolWeights"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getPoolWeights();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a>

---


### LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference <a name="LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference;

new LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetDrainDuration">resetDrainDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetRequireAllHeaders">resetRequireAllHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetSamesite">resetSamesite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetSecure">resetSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetZeroDowntimeFailover">resetZeroDowntimeFailover</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDrainDuration` <a name="resetDrainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetDrainDuration"></a>

```java
public void resetDrainDuration()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetRequireAllHeaders` <a name="resetRequireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetRequireAllHeaders"></a>

```java
public void resetRequireAllHeaders()
```

##### `resetSamesite` <a name="resetSamesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetSamesite"></a>

```java
public void resetSamesite()
```

##### `resetSecure` <a name="resetSecure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetSecure"></a>

```java
public void resetSecure()
```

##### `resetZeroDowntimeFailover` <a name="resetZeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetZeroDowntimeFailover"></a>

```java
public void resetZeroDowntimeFailover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.drainDurationInput">drainDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.headersInput">headersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeadersInput">requireAllHeadersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.samesiteInput">samesiteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.secureInput">secureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailoverInput">zeroDowntimeFailoverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.drainDuration">drainDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.headers">headers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeaders">requireAllHeaders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.samesite">samesite</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.secure">secure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover">zeroDowntimeFailover</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `drainDurationInput`<sup>Optional</sup> <a name="drainDurationInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.drainDurationInput"></a>

```java
public java.lang.Number getDrainDurationInput();
```

- *Type:* java.lang.Number

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.headersInput"></a>

```java
public java.util.List<java.lang.String> getHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireAllHeadersInput`<sup>Optional</sup> <a name="requireAllHeadersInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeadersInput"></a>

```java
public java.lang.Object getRequireAllHeadersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `samesiteInput`<sup>Optional</sup> <a name="samesiteInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.samesiteInput"></a>

```java
public java.lang.String getSamesiteInput();
```

- *Type:* java.lang.String

---

##### `secureInput`<sup>Optional</sup> <a name="secureInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.secureInput"></a>

```java
public java.lang.String getSecureInput();
```

- *Type:* java.lang.String

---

##### `zeroDowntimeFailoverInput`<sup>Optional</sup> <a name="zeroDowntimeFailoverInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailoverInput"></a>

```java
public java.lang.String getZeroDowntimeFailoverInput();
```

- *Type:* java.lang.String

---

##### `drainDuration`<sup>Required</sup> <a name="drainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.drainDuration"></a>

```java
public java.lang.Number getDrainDuration();
```

- *Type:* java.lang.Number

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.headers"></a>

```java
public java.util.List<java.lang.String> getHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireAllHeaders`<sup>Required</sup> <a name="requireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeaders"></a>

```java
public java.lang.Object getRequireAllHeaders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `samesite`<sup>Required</sup> <a name="samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.samesite"></a>

```java
public java.lang.String getSamesite();
```

- *Type:* java.lang.String

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.secure"></a>

```java
public java.lang.String getSecure();
```

- *Type:* java.lang.String

---

##### `zeroDowntimeFailover`<sup>Required</sup> <a name="zeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover"></a>

```java
public java.lang.String getZeroDowntimeFailover();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a>

---


### LoadBalancerSessionAffinityAttributesOutputReference <a name="LoadBalancerSessionAffinityAttributesOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer.LoadBalancerSessionAffinityAttributesOutputReference;

new LoadBalancerSessionAffinityAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetDrainDuration">resetDrainDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetRequireAllHeaders">resetRequireAllHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetSamesite">resetSamesite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetSecure">resetSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetZeroDowntimeFailover">resetZeroDowntimeFailover</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDrainDuration` <a name="resetDrainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetDrainDuration"></a>

```java
public void resetDrainDuration()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetRequireAllHeaders` <a name="resetRequireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetRequireAllHeaders"></a>

```java
public void resetRequireAllHeaders()
```

##### `resetSamesite` <a name="resetSamesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetSamesite"></a>

```java
public void resetSamesite()
```

##### `resetSecure` <a name="resetSecure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetSecure"></a>

```java
public void resetSecure()
```

##### `resetZeroDowntimeFailover` <a name="resetZeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetZeroDowntimeFailover"></a>

```java
public void resetZeroDowntimeFailover()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.drainDurationInput">drainDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.headersInput">headersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.requireAllHeadersInput">requireAllHeadersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.samesiteInput">samesiteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.secureInput">secureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.zeroDowntimeFailoverInput">zeroDowntimeFailoverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.drainDuration">drainDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.headers">headers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.requireAllHeaders">requireAllHeaders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.samesite">samesite</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.secure">secure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover">zeroDowntimeFailover</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `drainDurationInput`<sup>Optional</sup> <a name="drainDurationInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.drainDurationInput"></a>

```java
public java.lang.Number getDrainDurationInput();
```

- *Type:* java.lang.Number

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.headersInput"></a>

```java
public java.util.List<java.lang.String> getHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireAllHeadersInput`<sup>Optional</sup> <a name="requireAllHeadersInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.requireAllHeadersInput"></a>

```java
public java.lang.Object getRequireAllHeadersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `samesiteInput`<sup>Optional</sup> <a name="samesiteInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.samesiteInput"></a>

```java
public java.lang.String getSamesiteInput();
```

- *Type:* java.lang.String

---

##### `secureInput`<sup>Optional</sup> <a name="secureInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.secureInput"></a>

```java
public java.lang.String getSecureInput();
```

- *Type:* java.lang.String

---

##### `zeroDowntimeFailoverInput`<sup>Optional</sup> <a name="zeroDowntimeFailoverInput" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.zeroDowntimeFailoverInput"></a>

```java
public java.lang.String getZeroDowntimeFailoverInput();
```

- *Type:* java.lang.String

---

##### `drainDuration`<sup>Required</sup> <a name="drainDuration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.drainDuration"></a>

```java
public java.lang.Number getDrainDuration();
```

- *Type:* java.lang.Number

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.headers"></a>

```java
public java.util.List<java.lang.String> getHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireAllHeaders`<sup>Required</sup> <a name="requireAllHeaders" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.requireAllHeaders"></a>

```java
public java.lang.Object getRequireAllHeaders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `samesite`<sup>Required</sup> <a name="samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.samesite"></a>

```java
public java.lang.String getSamesite();
```

- *Type:* java.lang.String

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.secure"></a>

```java
public java.lang.String getSecure();
```

- *Type:* java.lang.String

---

##### `zeroDowntimeFailover`<sup>Required</sup> <a name="zeroDowntimeFailover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover"></a>

```java
public java.lang.String getZeroDowntimeFailover();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a>

---



