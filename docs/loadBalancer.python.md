# `loadBalancer` Submodule <a name="`loadBalancer` Submodule" id="@cdktf/provider-cloudflare.loadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancer <a name="LoadBalancer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer cloudflare_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancer(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_pools: typing.List[str],
  fallback_pool: str,
  name: str,
  zone_id: str,
  adaptive_routing: LoadBalancerAdaptiveRouting = None,
  country_pools: IResolvable | typing.Mapping[typing.List[str]] = None,
  description: str = None,
  enabled: bool | IResolvable = None,
  location_strategy: LoadBalancerLocationStrategy = None,
  networks: typing.List[str] = None,
  pop_pools: IResolvable | typing.Mapping[typing.List[str]] = None,
  proxied: bool | IResolvable = None,
  random_steering: LoadBalancerRandomSteering = None,
  region_pools: IResolvable | typing.Mapping[typing.List[str]] = None,
  rules: IResolvable | typing.List[LoadBalancerRules] = None,
  session_affinity: str = None,
  session_affinity_attributes: LoadBalancerSessionAffinityAttributes = None,
  session_affinity_ttl: typing.Union[int, float] = None,
  steering_policy: str = None,
  ttl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.defaultPools">default_pools</a></code> | <code>typing.List[str]</code> | A list of pool IDs ordered by their failover priority. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.fallbackPool">fallback_pool</a></code> | <code>str</code> | The pool ID to use when all other pools are detected as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.name">name</a></code> | <code>str</code> | The DNS hostname to associate with your Load Balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#zone_id LoadBalancer#zone_id}. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.adaptiveRouting">adaptive_routing</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a></code> | Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.countryPools">country_pools</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.description">description</a></code> | <code>str</code> | Object description. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether to enable (the default) this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.locationStrategy">location_strategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a></code> | Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.networks">networks</a></code> | <code>typing.List[str]</code> | List of networks where Load Balancer or Pool is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.popPools">pop_pools</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.proxied">proxied</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the hostname should be gray clouded (false) or orange clouded (true). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.randomSteering">random_steering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a></code> | Configures pool weights. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.regionPools">region_pools</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.rules">rules</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>]</code> | BETA Field Not General Access: A list of rules for this load balancer to execute. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.sessionAffinity">session_affinity</a></code> | <code>str</code> | Specifies the type of session affinity the load balancer should use unless specified as `"none"`. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.sessionAffinityAttributes">session_affinity_attributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a></code> | Configures attributes for session affinity. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.sessionAffinityTtl">session_affinity_ttl</a></code> | <code>typing.Union[int, float]</code> | Time, in seconds, until a client's session expires after being created. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.steeringPolicy">steering_policy</a></code> | <code>str</code> | Steering Policy for this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `default_pools`<sup>Required</sup> <a name="default_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.defaultPools"></a>

- *Type:* typing.List[str]

A list of pool IDs ordered by their failover priority.

Pools defined here are used by default, or when region_pools are not configured for a given region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#default_pools LoadBalancer#default_pools}

---

##### `fallback_pool`<sup>Required</sup> <a name="fallback_pool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.fallbackPool"></a>

- *Type:* str

The pool ID to use when all other pools are detected as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#fallback_pool LoadBalancer#fallback_pool}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.name"></a>

- *Type:* str

The DNS hostname to associate with your Load Balancer.

If this hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer will take precedence and the DNS record will not be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#name LoadBalancer#name}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.zoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#zone_id LoadBalancer#zone_id}.

---

##### `adaptive_routing`<sup>Optional</sup> <a name="adaptive_routing" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.adaptiveRouting"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a>

Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests.

For example, zero-downtime failover occurs immediately when an origin becomes unavailable due to HTTP 521, 522, or 523 response codes. If there is another healthy origin in the same pool, the request is retried once against this alternate origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#adaptive_routing LoadBalancer#adaptive_routing}

---

##### `country_pools`<sup>Optional</sup> <a name="country_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.countryPools"></a>

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country.

Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#country_pools LoadBalancer#country_pools}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.description"></a>

- *Type:* str

Object description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#description LoadBalancer#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Whether to enable (the default) this load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#enabled LoadBalancer#enabled}

---

##### `location_strategy`<sup>Optional</sup> <a name="location_strategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.locationStrategy"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a>

Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#location_strategy LoadBalancer#location_strategy}

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.networks"></a>

- *Type:* typing.List[str]

List of networks where Load Balancer or Pool is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#networks LoadBalancer#networks}

---

##### `pop_pools`<sup>Optional</sup> <a name="pop_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.popPools"></a>

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter).

Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#pop_pools LoadBalancer#pop_pools}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.proxied"></a>

- *Type:* bool | cdktf.IResolvable

Whether the hostname should be gray clouded (false) or orange clouded (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#proxied LoadBalancer#proxied}

---

##### `random_steering`<sup>Optional</sup> <a name="random_steering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.randomSteering"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a>

Configures pool weights.

* `steering_policy="random"`: A random pool is selected with probability proportional to pool weights.
* `steering_policy="least_outstanding_requests"`: Use pool weights to scale each pool's outstanding requests.
* `steering_policy="least_connections"`: Use pool weights to scale each pool's open connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#random_steering LoadBalancer#random_steering}

---

##### `region_pools`<sup>Optional</sup> <a name="region_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.regionPools"></a>

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region.

Any regions not explicitly defined will fall back to using default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#region_pools LoadBalancer#region_pools}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.rules"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>]

BETA Field Not General Access: A list of rules for this load balancer to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#rules LoadBalancer#rules}

---

##### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.sessionAffinity"></a>

- *Type:* str

Specifies the type of session affinity the load balancer should use unless specified as `"none"`.

The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy, then a new origin server is calculated and used. - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin selection is stable and based on the client's ip address. - `"header"`: On the first request to a proxied load balancer, a session key based on the configured HTTP headers (see `session_affinity_attributes.headers`) is generated, encoding the request headers used for storing in the load balancer session state which origin the request will be forwarded to. Subsequent requests to the load balancer with the same headers will be sent to the same origin server, for the duration of the session and as long as the origin server remains healthy. If the session has been idle for the duration of `session_affinity_ttl` seconds or the origin server is unhealthy, then a new origin server is calculated and used. See `headers` in `session_affinity_attributes` for additional required configuration.
Available values: "none", "cookie", "ip_cookie", "header".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity LoadBalancer#session_affinity}

---

##### `session_affinity_attributes`<sup>Optional</sup> <a name="session_affinity_attributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.sessionAffinityAttributes"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a>

Configures attributes for session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}

---

##### `session_affinity_ttl`<sup>Optional</sup> <a name="session_affinity_ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.sessionAffinityTtl"></a>

- *Type:* typing.Union[int, float]

Time, in seconds, until a client's session expires after being created.

Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are: - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800]. - `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}

---

##### `steering_policy`<sup>Optional</sup> <a name="steering_policy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.steeringPolicy"></a>

- *Type:* str

Steering Policy for this load balancer.

* `"off"`: Use `default_pools`.
* `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
* `"random"`: Select a pool randomly.
* `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
* `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
* `"least_outstanding_requests"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others.
* `"least_connections"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
* `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
  Available values: "off", "geo", "random", "dynamic_latency", "proximity", "least_outstanding_requests", "least_connections", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#steering_policy LoadBalancer#steering_policy}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Time to live (TTL) of the DNS entry for the IP address returned by this load balancer.

This only applies to gray-clouded (unproxied) load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#ttl LoadBalancer#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putAdaptiveRouting">put_adaptive_routing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putLocationStrategy">put_location_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRandomSteering">put_random_steering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putSessionAffinityAttributes">put_session_affinity_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetAdaptiveRouting">reset_adaptive_routing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetCountryPools">reset_country_pools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetLocationStrategy">reset_location_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetNetworks">reset_networks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetPopPools">reset_pop_pools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetProxied">reset_proxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRandomSteering">reset_random_steering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRegionPools">reset_region_pools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRules">reset_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinity">reset_session_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinityAttributes">reset_session_affinity_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinityTtl">reset_session_affinity_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSteeringPolicy">reset_steering_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_adaptive_routing` <a name="put_adaptive_routing" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putAdaptiveRouting"></a>

```python
def put_adaptive_routing(
  failover_across_pools: bool | IResolvable = None
) -> None
```

###### `failover_across_pools`<sup>Optional</sup> <a name="failover_across_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putAdaptiveRouting.parameter.failoverAcrossPools"></a>

- *Type:* bool | cdktf.IResolvable

Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering.

When set false (the default) zero-downtime failover will only occur between origins within the same pool. See `session_affinity_attributes` for control over when sessions are broken or reassigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#failover_across_pools LoadBalancer#failover_across_pools}

---

##### `put_location_strategy` <a name="put_location_strategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putLocationStrategy"></a>

```python
def put_location_strategy(
  mode: str = None,
  prefer_ecs: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putLocationStrategy.parameter.mode"></a>

- *Type:* str

Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful.

* `"pop"`: Use the Cloudflare PoP location.
* `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is unsuccessful, use the Cloudflare PoP location.
  Available values: "pop", "resolver_ip".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#mode LoadBalancer#mode}

---

###### `prefer_ecs`<sup>Optional</sup> <a name="prefer_ecs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putLocationStrategy.parameter.preferEcs"></a>

- *Type:* str

Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location.

* `"always"`: Always prefer ECS.
* `"never"`: Never prefer ECS.
* `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
* `"geo"`: Prefer ECS only when `steering_policy="geo"`.
  Available values: "always", "never", "proximity", "geo".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#prefer_ecs LoadBalancer#prefer_ecs}

---

##### `put_random_steering` <a name="put_random_steering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRandomSteering"></a>

```python
def put_random_steering(
  default_weight: typing.Union[int, float] = None,
  pool_weights: typing.Mapping[typing.Union[int, float]] = None
) -> None
```

###### `default_weight`<sup>Optional</sup> <a name="default_weight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRandomSteering.parameter.defaultWeight"></a>

- *Type:* typing.Union[int, float]

The default weight for pools in the load balancer that are not specified in the pool_weights map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#default_weight LoadBalancer#default_weight}

---

###### `pool_weights`<sup>Optional</sup> <a name="pool_weights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRandomSteering.parameter.poolWeights"></a>

- *Type:* typing.Mapping[typing.Union[int, float]]

A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#pool_weights LoadBalancer#pool_weights}

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[LoadBalancerRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>]

---

##### `put_session_affinity_attributes` <a name="put_session_affinity_attributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putSessionAffinityAttributes"></a>

```python
def put_session_affinity_attributes(
  drain_duration: typing.Union[int, float] = None,
  headers: typing.List[str] = None,
  require_all_headers: bool | IResolvable = None,
  samesite: str = None,
  secure: str = None,
  zero_downtime_failover: str = None
) -> None
```

###### `drain_duration`<sup>Optional</sup> <a name="drain_duration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putSessionAffinityAttributes.parameter.drainDuration"></a>

- *Type:* typing.Union[int, float]

Configures the drain duration in seconds.

This field is only used when session affinity is enabled on the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#drain_duration LoadBalancer#drain_duration}

---

###### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putSessionAffinityAttributes.parameter.headers"></a>

- *Type:* typing.List[str]

Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled.

At least one HTTP header name must be provided. To specify the exact cookies to be used, include an item in the following format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything after the colon is a comma-separated list of cookie names. Providing only `"cookie"` will result in all cookies being used. The default max number of HTTP header names that can be provided depends on your plan: 5 for Enterprise, 1 for all other plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#headers LoadBalancer#headers}

---

###### `require_all_headers`<sup>Optional</sup> <a name="require_all_headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putSessionAffinityAttributes.parameter.requireAllHeaders"></a>

- *Type:* bool | cdktf.IResolvable

When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used.

The supported values are: - `"true"`: Load balancing requests must contain *all* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created. - `"false"`: Load balancing requests must contain *at least one* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#require_all_headers LoadBalancer#require_all_headers}

---

###### `samesite`<sup>Optional</sup> <a name="samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putSessionAffinityAttributes.parameter.samesite"></a>

- *Type:* str

Configures the SameSite attribute on session affinity cookie.

Value "Auto" will be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note: when using value "None", the secure attribute can not be set to "Never".
Available values: "Auto", "Lax", "None", "Strict".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#samesite LoadBalancer#samesite}

---

###### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putSessionAffinityAttributes.parameter.secure"></a>

- *Type:* str

Configures the Secure attribute on session affinity cookie.

Value "Always" indicates the Secure attribute will be set in the Set-Cookie header, "Never" indicates the Secure attribute will not be set, and "Auto" will set the Secure attribute depending if Always Use HTTPS is enabled.
Available values: "Auto", "Always", "Never".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#secure LoadBalancer#secure}

---

###### `zero_downtime_failover`<sup>Optional</sup> <a name="zero_downtime_failover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.putSessionAffinityAttributes.parameter.zeroDowntimeFailover"></a>

- *Type:* str

Configures the zero-downtime failover between origins within a pool when session affinity is enabled.

This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. The supported values are: - `"none"`: No failover takes place for sessions pinned to the origin (default). - `"temporary"`: Traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping. - `"sticky"`: The session affinity cookie is updated and subsequent requests are sent to the new origin. Note: Zero-downtime failover with sticky sessions is currently not supported for session affinity by header.
Available values: "none", "temporary", "sticky".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#zero_downtime_failover LoadBalancer#zero_downtime_failover}

---

##### `reset_adaptive_routing` <a name="reset_adaptive_routing" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetAdaptiveRouting"></a>

```python
def reset_adaptive_routing() -> None
```

##### `reset_country_pools` <a name="reset_country_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetCountryPools"></a>

```python
def reset_country_pools() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_location_strategy` <a name="reset_location_strategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetLocationStrategy"></a>

```python
def reset_location_strategy() -> None
```

##### `reset_networks` <a name="reset_networks" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetNetworks"></a>

```python
def reset_networks() -> None
```

##### `reset_pop_pools` <a name="reset_pop_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetPopPools"></a>

```python
def reset_pop_pools() -> None
```

##### `reset_proxied` <a name="reset_proxied" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetProxied"></a>

```python
def reset_proxied() -> None
```

##### `reset_random_steering` <a name="reset_random_steering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRandomSteering"></a>

```python
def reset_random_steering() -> None
```

##### `reset_region_pools` <a name="reset_region_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRegionPools"></a>

```python
def reset_region_pools() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetRules"></a>

```python
def reset_rules() -> None
```

##### `reset_session_affinity` <a name="reset_session_affinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinity"></a>

```python
def reset_session_affinity() -> None
```

##### `reset_session_affinity_attributes` <a name="reset_session_affinity_attributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinityAttributes"></a>

```python
def reset_session_affinity_attributes() -> None
```

##### `reset_session_affinity_ttl` <a name="reset_session_affinity_ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSessionAffinityTtl"></a>

```python
def reset_session_affinity_ttl() -> None
```

##### `reset_steering_policy` <a name="reset_steering_policy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetSteeringPolicy"></a>

```python
def reset_steering_policy() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LoadBalancer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancer.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LoadBalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LoadBalancer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.adaptiveRouting">adaptive_routing</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference">LoadBalancerAdaptiveRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.locationStrategy">location_strategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference">LoadBalancerLocationStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.modifiedOn">modified_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.randomSteering">random_steering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference">LoadBalancerRandomSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList">LoadBalancerRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityAttributes">session_affinity_attributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference">LoadBalancerSessionAffinityAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneName">zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.adaptiveRoutingInput">adaptive_routing_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.countryPoolsInput">country_pools_input</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.defaultPoolsInput">default_pools_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fallbackPoolInput">fallback_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.locationStrategyInput">location_strategy_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.networksInput">networks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.popPoolsInput">pop_pools_input</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.proxiedInput">proxied_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.randomSteeringInput">random_steering_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.regionPoolsInput">region_pools_input</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.rulesInput">rules_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityAttributesInput">session_affinity_attributes_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityInput">session_affinity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityTtlInput">session_affinity_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.steeringPolicyInput">steering_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.countryPools">country_pools</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.defaultPools">default_pools</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fallbackPool">fallback_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.networks">networks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.popPools">pop_pools</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.proxied">proxied</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.regionPools">region_pools</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinity">session_affinity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityTtl">session_affinity_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.steeringPolicy">steering_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `adaptive_routing`<sup>Required</sup> <a name="adaptive_routing" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.adaptiveRouting"></a>

```python
adaptive_routing: LoadBalancerAdaptiveRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference">LoadBalancerAdaptiveRoutingOutputReference</a>

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location_strategy`<sup>Required</sup> <a name="location_strategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.locationStrategy"></a>

```python
location_strategy: LoadBalancerLocationStrategyOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference">LoadBalancerLocationStrategyOutputReference</a>

---

##### `modified_on`<sup>Required</sup> <a name="modified_on" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.modifiedOn"></a>

```python
modified_on: str
```

- *Type:* str

---

##### `random_steering`<sup>Required</sup> <a name="random_steering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.randomSteering"></a>

```python
random_steering: LoadBalancerRandomSteeringOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference">LoadBalancerRandomSteeringOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.rules"></a>

```python
rules: LoadBalancerRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList">LoadBalancerRulesList</a>

---

##### `session_affinity_attributes`<sup>Required</sup> <a name="session_affinity_attributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityAttributes"></a>

```python
session_affinity_attributes: LoadBalancerSessionAffinityAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference">LoadBalancerSessionAffinityAttributesOutputReference</a>

---

##### `zone_name`<sup>Required</sup> <a name="zone_name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

---

##### `adaptive_routing_input`<sup>Optional</sup> <a name="adaptive_routing_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.adaptiveRoutingInput"></a>

```python
adaptive_routing_input: IResolvable | LoadBalancerAdaptiveRouting
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a>

---

##### `country_pools_input`<sup>Optional</sup> <a name="country_pools_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.countryPoolsInput"></a>

```python
country_pools_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

---

##### `default_pools_input`<sup>Optional</sup> <a name="default_pools_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.defaultPoolsInput"></a>

```python
default_pools_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `fallback_pool_input`<sup>Optional</sup> <a name="fallback_pool_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fallbackPoolInput"></a>

```python
fallback_pool_input: str
```

- *Type:* str

---

##### `location_strategy_input`<sup>Optional</sup> <a name="location_strategy_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.locationStrategyInput"></a>

```python
location_strategy_input: IResolvable | LoadBalancerLocationStrategy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networks_input`<sup>Optional</sup> <a name="networks_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.networksInput"></a>

```python
networks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pop_pools_input`<sup>Optional</sup> <a name="pop_pools_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.popPoolsInput"></a>

```python
pop_pools_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

---

##### `proxied_input`<sup>Optional</sup> <a name="proxied_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.proxiedInput"></a>

```python
proxied_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `random_steering_input`<sup>Optional</sup> <a name="random_steering_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.randomSteeringInput"></a>

```python
random_steering_input: IResolvable | LoadBalancerRandomSteering
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a>

---

##### `region_pools_input`<sup>Optional</sup> <a name="region_pools_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.regionPoolsInput"></a>

```python
region_pools_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[LoadBalancerRules]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>]

---

##### `session_affinity_attributes_input`<sup>Optional</sup> <a name="session_affinity_attributes_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityAttributesInput"></a>

```python
session_affinity_attributes_input: IResolvable | LoadBalancerSessionAffinityAttributes
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a>

---

##### `session_affinity_input`<sup>Optional</sup> <a name="session_affinity_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityInput"></a>

```python
session_affinity_input: str
```

- *Type:* str

---

##### `session_affinity_ttl_input`<sup>Optional</sup> <a name="session_affinity_ttl_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityTtlInput"></a>

```python
session_affinity_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `steering_policy_input`<sup>Optional</sup> <a name="steering_policy_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.steeringPolicyInput"></a>

```python
steering_policy_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `country_pools`<sup>Required</sup> <a name="country_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.countryPools"></a>

```python
country_pools: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

---

##### `default_pools`<sup>Required</sup> <a name="default_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.defaultPools"></a>

```python
default_pools: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `fallback_pool`<sup>Required</sup> <a name="fallback_pool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.fallbackPool"></a>

```python
fallback_pool: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.networks"></a>

```python
networks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pop_pools`<sup>Required</sup> <a name="pop_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.popPools"></a>

```python
pop_pools: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

---

##### `proxied`<sup>Required</sup> <a name="proxied" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.proxied"></a>

```python
proxied: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `region_pools`<sup>Required</sup> <a name="region_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.regionPools"></a>

```python
region_pools: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

---

##### `session_affinity`<sup>Required</sup> <a name="session_affinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinity"></a>

```python
session_affinity: str
```

- *Type:* str

---

##### `session_affinity_ttl`<sup>Required</sup> <a name="session_affinity_ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.sessionAffinityTtl"></a>

```python
session_affinity_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `steering_policy`<sup>Required</sup> <a name="steering_policy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.steeringPolicy"></a>

```python
steering_policy: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerAdaptiveRouting <a name="LoadBalancerAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerAdaptiveRouting(
  failover_across_pools: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting.property.failoverAcrossPools">failover_across_pools</a></code> | <code>bool \| cdktf.IResolvable</code> | Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering. |

---

##### `failover_across_pools`<sup>Optional</sup> <a name="failover_across_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting.property.failoverAcrossPools"></a>

```python
failover_across_pools: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering.

When set false (the default) zero-downtime failover will only occur between origins within the same pool. See `session_affinity_attributes` for control over when sessions are broken or reassigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#failover_across_pools LoadBalancer#failover_across_pools}

---

### LoadBalancerConfig <a name="LoadBalancerConfig" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_pools: typing.List[str],
  fallback_pool: str,
  name: str,
  zone_id: str,
  adaptive_routing: LoadBalancerAdaptiveRouting = None,
  country_pools: IResolvable | typing.Mapping[typing.List[str]] = None,
  description: str = None,
  enabled: bool | IResolvable = None,
  location_strategy: LoadBalancerLocationStrategy = None,
  networks: typing.List[str] = None,
  pop_pools: IResolvable | typing.Mapping[typing.List[str]] = None,
  proxied: bool | IResolvable = None,
  random_steering: LoadBalancerRandomSteering = None,
  region_pools: IResolvable | typing.Mapping[typing.List[str]] = None,
  rules: IResolvable | typing.List[LoadBalancerRules] = None,
  session_affinity: str = None,
  session_affinity_attributes: LoadBalancerSessionAffinityAttributes = None,
  session_affinity_ttl: typing.Union[int, float] = None,
  steering_policy: str = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.defaultPools">default_pools</a></code> | <code>typing.List[str]</code> | A list of pool IDs ordered by their failover priority. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.fallbackPool">fallback_pool</a></code> | <code>str</code> | The pool ID to use when all other pools are detected as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.name">name</a></code> | <code>str</code> | The DNS hostname to associate with your Load Balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#zone_id LoadBalancer#zone_id}. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.adaptiveRouting">adaptive_routing</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a></code> | Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.countryPools">country_pools</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.description">description</a></code> | <code>str</code> | Object description. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether to enable (the default) this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.locationStrategy">location_strategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a></code> | Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.networks">networks</a></code> | <code>typing.List[str]</code> | List of networks where Load Balancer or Pool is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.popPools">pop_pools</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.proxied">proxied</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether the hostname should be gray clouded (false) or orange clouded (true). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.randomSteering">random_steering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a></code> | Configures pool weights. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.regionPools">region_pools</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.rules">rules</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>]</code> | BETA Field Not General Access: A list of rules for this load balancer to execute. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinity">session_affinity</a></code> | <code>str</code> | Specifies the type of session affinity the load balancer should use unless specified as `"none"`. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinityAttributes">session_affinity_attributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a></code> | Configures attributes for session affinity. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinityTtl">session_affinity_ttl</a></code> | <code>typing.Union[int, float]</code> | Time, in seconds, until a client's session expires after being created. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.steeringPolicy">steering_policy</a></code> | <code>str</code> | Steering Policy for this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `default_pools`<sup>Required</sup> <a name="default_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.defaultPools"></a>

```python
default_pools: typing.List[str]
```

- *Type:* typing.List[str]

A list of pool IDs ordered by their failover priority.

Pools defined here are used by default, or when region_pools are not configured for a given region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#default_pools LoadBalancer#default_pools}

---

##### `fallback_pool`<sup>Required</sup> <a name="fallback_pool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.fallbackPool"></a>

```python
fallback_pool: str
```

- *Type:* str

The pool ID to use when all other pools are detected as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#fallback_pool LoadBalancer#fallback_pool}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The DNS hostname to associate with your Load Balancer.

If this hostname already exists as a DNS record in Cloudflare's DNS, the Load Balancer will take precedence and the DNS record will not be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#name LoadBalancer#name}

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#zone_id LoadBalancer#zone_id}.

---

##### `adaptive_routing`<sup>Optional</sup> <a name="adaptive_routing" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.adaptiveRouting"></a>

```python
adaptive_routing: LoadBalancerAdaptiveRouting
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a>

Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests.

For example, zero-downtime failover occurs immediately when an origin becomes unavailable due to HTTP 521, 522, or 523 response codes. If there is another healthy origin in the same pool, the request is retried once against this alternate origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#adaptive_routing LoadBalancer#adaptive_routing}

---

##### `country_pools`<sup>Optional</sup> <a name="country_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.countryPools"></a>

```python
country_pools: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country.

Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#country_pools LoadBalancer#country_pools}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Object description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#description LoadBalancer#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether to enable (the default) this load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#enabled LoadBalancer#enabled}

---

##### `location_strategy`<sup>Optional</sup> <a name="location_strategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.locationStrategy"></a>

```python
location_strategy: LoadBalancerLocationStrategy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a>

Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#location_strategy LoadBalancer#location_strategy}

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.networks"></a>

```python
networks: typing.List[str]
```

- *Type:* typing.List[str]

List of networks where Load Balancer or Pool is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#networks LoadBalancer#networks}

---

##### `pop_pools`<sup>Optional</sup> <a name="pop_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.popPools"></a>

```python
pop_pools: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter).

Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#pop_pools LoadBalancer#pop_pools}

---

##### `proxied`<sup>Optional</sup> <a name="proxied" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.proxied"></a>

```python
proxied: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether the hostname should be gray clouded (false) or orange clouded (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#proxied LoadBalancer#proxied}

---

##### `random_steering`<sup>Optional</sup> <a name="random_steering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.randomSteering"></a>

```python
random_steering: LoadBalancerRandomSteering
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a>

Configures pool weights.

* `steering_policy="random"`: A random pool is selected with probability proportional to pool weights.
* `steering_policy="least_outstanding_requests"`: Use pool weights to scale each pool's outstanding requests.
* `steering_policy="least_connections"`: Use pool weights to scale each pool's open connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#random_steering LoadBalancer#random_steering}

---

##### `region_pools`<sup>Optional</sup> <a name="region_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.regionPools"></a>

```python
region_pools: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region.

Any regions not explicitly defined will fall back to using default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#region_pools LoadBalancer#region_pools}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.rules"></a>

```python
rules: IResolvable | typing.List[LoadBalancerRules]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>]

BETA Field Not General Access: A list of rules for this load balancer to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#rules LoadBalancer#rules}

---

##### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinity"></a>

```python
session_affinity: str
```

- *Type:* str

Specifies the type of session affinity the load balancer should use unless specified as `"none"`.

The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy, then a new origin server is calculated and used. - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin selection is stable and based on the client's ip address. - `"header"`: On the first request to a proxied load balancer, a session key based on the configured HTTP headers (see `session_affinity_attributes.headers`) is generated, encoding the request headers used for storing in the load balancer session state which origin the request will be forwarded to. Subsequent requests to the load balancer with the same headers will be sent to the same origin server, for the duration of the session and as long as the origin server remains healthy. If the session has been idle for the duration of `session_affinity_ttl` seconds or the origin server is unhealthy, then a new origin server is calculated and used. See `headers` in `session_affinity_attributes` for additional required configuration.
Available values: "none", "cookie", "ip_cookie", "header".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity LoadBalancer#session_affinity}

---

##### `session_affinity_attributes`<sup>Optional</sup> <a name="session_affinity_attributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinityAttributes"></a>

```python
session_affinity_attributes: LoadBalancerSessionAffinityAttributes
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a>

Configures attributes for session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}

---

##### `session_affinity_ttl`<sup>Optional</sup> <a name="session_affinity_ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.sessionAffinityTtl"></a>

```python
session_affinity_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time, in seconds, until a client's session expires after being created.

Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are: - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800]. - `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}

---

##### `steering_policy`<sup>Optional</sup> <a name="steering_policy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.steeringPolicy"></a>

```python
steering_policy: str
```

- *Type:* str

Steering Policy for this load balancer.

* `"off"`: Use `default_pools`.
* `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
* `"random"`: Select a pool randomly.
* `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
* `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
* `"least_outstanding_requests"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others.
* `"least_connections"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
* `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
  Available values: "off", "geo", "random", "dynamic_latency", "proximity", "least_outstanding_requests", "least_connections", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#steering_policy LoadBalancer#steering_policy}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time to live (TTL) of the DNS entry for the IP address returned by this load balancer.

This only applies to gray-clouded (unproxied) load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#ttl LoadBalancer#ttl}

---

### LoadBalancerLocationStrategy <a name="LoadBalancerLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerLocationStrategy(
  mode: str = None,
  prefer_ecs: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.property.mode">mode</a></code> | <code>str</code> | Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.property.preferEcs">prefer_ecs</a></code> | <code>str</code> | Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.property.mode"></a>

```python
mode: str
```

- *Type:* str

Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful.

* `"pop"`: Use the Cloudflare PoP location.
* `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is unsuccessful, use the Cloudflare PoP location.
  Available values: "pop", "resolver_ip".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#mode LoadBalancer#mode}

---

##### `prefer_ecs`<sup>Optional</sup> <a name="prefer_ecs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy.property.preferEcs"></a>

```python
prefer_ecs: str
```

- *Type:* str

Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location.

* `"always"`: Always prefer ECS.
* `"never"`: Never prefer ECS.
* `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
* `"geo"`: Prefer ECS only when `steering_policy="geo"`.
  Available values: "always", "never", "proximity", "geo".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#prefer_ecs LoadBalancer#prefer_ecs}

---

### LoadBalancerRandomSteering <a name="LoadBalancerRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerRandomSteering(
  default_weight: typing.Union[int, float] = None,
  pool_weights: typing.Mapping[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.property.defaultWeight">default_weight</a></code> | <code>typing.Union[int, float]</code> | The default weight for pools in the load balancer that are not specified in the pool_weights map. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.property.poolWeights">pool_weights</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer. |

---

##### `default_weight`<sup>Optional</sup> <a name="default_weight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.property.defaultWeight"></a>

```python
default_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default weight for pools in the load balancer that are not specified in the pool_weights map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#default_weight LoadBalancer#default_weight}

---

##### `pool_weights`<sup>Optional</sup> <a name="pool_weights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering.property.poolWeights"></a>

```python
pool_weights: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#pool_weights LoadBalancer#pool_weights}

---

### LoadBalancerRules <a name="LoadBalancerRules" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerRules(
  condition: str = None,
  disabled: bool | IResolvable = None,
  fixed_response: LoadBalancerRulesFixedResponse = None,
  name: str = None,
  overrides: LoadBalancerRulesOverrides = None,
  priority: typing.Union[int, float] = None,
  terminates: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.condition">condition</a></code> | <code>str</code> | The condition expressions to evaluate. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.disabled">disabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Disable this specific rule. It will no longer be evaluated by this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.fixedResponse">fixed_response</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a></code> | A collection of fields used to directly respond to the eyeball instead of routing to a pool. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.name">name</a></code> | <code>str</code> | Name of this rule. Only used for human readability. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a></code> | A collection of overrides to apply to the load balancer when this rule's condition is true. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The order in which rules should be executed in relation to each other. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.terminates">terminates</a></code> | <code>bool \| cdktf.IResolvable</code> | If this rule's condition is true, this causes rule evaluation to stop after processing this rule. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.condition"></a>

```python
condition: str
```

- *Type:* str

The condition expressions to evaluate.

If the condition evaluates to true, the overrides or fixed_response in this rule will be applied. An empty condition is always true. For more details on condition expressions, please see https://developers.cloudflare.com/load-balancing/understand-basics/load-balancing-rules/expressions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#condition LoadBalancer#condition}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Disable this specific rule. It will no longer be evaluated by this load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#disabled LoadBalancer#disabled}

---

##### `fixed_response`<sup>Optional</sup> <a name="fixed_response" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.fixedResponse"></a>

```python
fixed_response: LoadBalancerRulesFixedResponse
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a>

A collection of fields used to directly respond to the eyeball instead of routing to a pool.

If a fixed_response is supplied the rule will be marked as terminates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#fixed_response LoadBalancer#fixed_response}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.name"></a>

```python
name: str
```

- *Type:* str

Name of this rule. Only used for human readability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#name LoadBalancer#name}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.overrides"></a>

```python
overrides: LoadBalancerRulesOverrides
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a>

A collection of overrides to apply to the load balancer when this rule's condition is true.

All fields are optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#overrides LoadBalancer#overrides}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The order in which rules should be executed in relation to each other.

Lower values are executed first. Values do not need to be sequential. If no value is provided for any rule the array order of the rules field will be used to assign a priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#priority LoadBalancer#priority}

---

##### `terminates`<sup>Optional</sup> <a name="terminates" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules.property.terminates"></a>

```python
terminates: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If this rule's condition is true, this causes rule evaluation to stop after processing this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#terminates LoadBalancer#terminates}

---

### LoadBalancerRulesFixedResponse <a name="LoadBalancerRulesFixedResponse" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerRulesFixedResponse(
  content_type: str = None,
  location: str = None,
  message_body: str = None,
  status_code: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.contentType">content_type</a></code> | <code>str</code> | The http 'Content-Type' header to include in the response. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.location">location</a></code> | <code>str</code> | The http 'Location' header to include in the response. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.messageBody">message_body</a></code> | <code>str</code> | Text to include as the http body. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | The http status code to respond with. |

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

The http 'Content-Type' header to include in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#content_type LoadBalancer#content_type}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.location"></a>

```python
location: str
```

- *Type:* str

The http 'Location' header to include in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#location LoadBalancer#location}

---

##### `message_body`<sup>Optional</sup> <a name="message_body" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.messageBody"></a>

```python
message_body: str
```

- *Type:* str

Text to include as the http body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#message_body LoadBalancer#message_body}

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The http status code to respond with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#status_code LoadBalancer#status_code}

---

### LoadBalancerRulesOverrides <a name="LoadBalancerRulesOverrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerRulesOverrides(
  adaptive_routing: LoadBalancerRulesOverridesAdaptiveRouting = None,
  country_pools: IResolvable | typing.Mapping[typing.List[str]] = None,
  default_pools: typing.List[str] = None,
  fallback_pool: str = None,
  location_strategy: LoadBalancerRulesOverridesLocationStrategy = None,
  pop_pools: IResolvable | typing.Mapping[typing.List[str]] = None,
  random_steering: LoadBalancerRulesOverridesRandomSteering = None,
  region_pools: IResolvable | typing.Mapping[typing.List[str]] = None,
  session_affinity: str = None,
  session_affinity_attributes: LoadBalancerRulesOverridesSessionAffinityAttributes = None,
  session_affinity_ttl: typing.Union[int, float] = None,
  steering_policy: str = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.adaptiveRouting">adaptive_routing</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a></code> | Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.countryPools">country_pools</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.defaultPools">default_pools</a></code> | <code>typing.List[str]</code> | A list of pool IDs ordered by their failover priority. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.fallbackPool">fallback_pool</a></code> | <code>str</code> | The pool ID to use when all other pools are detected as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.locationStrategy">location_strategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a></code> | Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.popPools">pop_pools</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter). |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.randomSteering">random_steering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a></code> | Configures pool weights. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.regionPools">region_pools</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinity">session_affinity</a></code> | <code>str</code> | Specifies the type of session affinity the load balancer should use unless specified as `"none"`. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinityAttributes">session_affinity_attributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a></code> | Configures attributes for session affinity. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinityTtl">session_affinity_ttl</a></code> | <code>typing.Union[int, float]</code> | Time, in seconds, until a client's session expires after being created. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.steeringPolicy">steering_policy</a></code> | <code>str</code> | Steering Policy for this load balancer. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Time to live (TTL) of the DNS entry for the IP address returned by this load balancer. |

---

##### `adaptive_routing`<sup>Optional</sup> <a name="adaptive_routing" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.adaptiveRouting"></a>

```python
adaptive_routing: LoadBalancerRulesOverridesAdaptiveRouting
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a>

Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests.

For example, zero-downtime failover occurs immediately when an origin becomes unavailable due to HTTP 521, 522, or 523 response codes. If there is another healthy origin in the same pool, the request is retried once against this alternate origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#adaptive_routing LoadBalancer#adaptive_routing}

---

##### `country_pools`<sup>Optional</sup> <a name="country_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.countryPools"></a>

```python
country_pools: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country.

Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#country_pools LoadBalancer#country_pools}

---

##### `default_pools`<sup>Optional</sup> <a name="default_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.defaultPools"></a>

```python
default_pools: typing.List[str]
```

- *Type:* typing.List[str]

A list of pool IDs ordered by their failover priority.

Pools defined here are used by default, or when region_pools are not configured for a given region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#default_pools LoadBalancer#default_pools}

---

##### `fallback_pool`<sup>Optional</sup> <a name="fallback_pool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.fallbackPool"></a>

```python
fallback_pool: str
```

- *Type:* str

The pool ID to use when all other pools are detected as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#fallback_pool LoadBalancer#fallback_pool}

---

##### `location_strategy`<sup>Optional</sup> <a name="location_strategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.locationStrategy"></a>

```python
location_strategy: LoadBalancerRulesOverridesLocationStrategy
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a>

Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#location_strategy LoadBalancer#location_strategy}

---

##### `pop_pools`<sup>Optional</sup> <a name="pop_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.popPools"></a>

```python
pop_pools: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter).

Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#pop_pools LoadBalancer#pop_pools}

---

##### `random_steering`<sup>Optional</sup> <a name="random_steering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.randomSteering"></a>

```python
random_steering: LoadBalancerRulesOverridesRandomSteering
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a>

Configures pool weights.

* `steering_policy="random"`: A random pool is selected with probability proportional to pool weights.
* `steering_policy="least_outstanding_requests"`: Use pool weights to scale each pool's outstanding requests.
* `steering_policy="least_connections"`: Use pool weights to scale each pool's open connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#random_steering LoadBalancer#random_steering}

---

##### `region_pools`<sup>Optional</sup> <a name="region_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.regionPools"></a>

```python
region_pools: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region.

Any regions not explicitly defined will fall back to using default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#region_pools LoadBalancer#region_pools}

---

##### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinity"></a>

```python
session_affinity: str
```

- *Type:* str

Specifies the type of session affinity the load balancer should use unless specified as `"none"`.

The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy, then a new origin server is calculated and used. - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin selection is stable and based on the client's ip address. - `"header"`: On the first request to a proxied load balancer, a session key based on the configured HTTP headers (see `session_affinity_attributes.headers`) is generated, encoding the request headers used for storing in the load balancer session state which origin the request will be forwarded to. Subsequent requests to the load balancer with the same headers will be sent to the same origin server, for the duration of the session and as long as the origin server remains healthy. If the session has been idle for the duration of `session_affinity_ttl` seconds or the origin server is unhealthy, then a new origin server is calculated and used. See `headers` in `session_affinity_attributes` for additional required configuration.
Available values: "none", "cookie", "ip_cookie", "header".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity LoadBalancer#session_affinity}

---

##### `session_affinity_attributes`<sup>Optional</sup> <a name="session_affinity_attributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinityAttributes"></a>

```python
session_affinity_attributes: LoadBalancerRulesOverridesSessionAffinityAttributes
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a>

Configures attributes for session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}

---

##### `session_affinity_ttl`<sup>Optional</sup> <a name="session_affinity_ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.sessionAffinityTtl"></a>

```python
session_affinity_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time, in seconds, until a client's session expires after being created.

Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are: - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800]. - `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}

---

##### `steering_policy`<sup>Optional</sup> <a name="steering_policy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.steeringPolicy"></a>

```python
steering_policy: str
```

- *Type:* str

Steering Policy for this load balancer.

* `"off"`: Use `default_pools`.
* `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
* `"random"`: Select a pool randomly.
* `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
* `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
* `"least_outstanding_requests"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others.
* `"least_connections"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
* `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
  Available values: "off", "geo", "random", "dynamic_latency", "proximity", "least_outstanding_requests", "least_connections", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#steering_policy LoadBalancer#steering_policy}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time to live (TTL) of the DNS entry for the IP address returned by this load balancer.

This only applies to gray-clouded (unproxied) load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#ttl LoadBalancer#ttl}

---

### LoadBalancerRulesOverridesAdaptiveRouting <a name="LoadBalancerRulesOverridesAdaptiveRouting" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting(
  failover_across_pools: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting.property.failoverAcrossPools">failover_across_pools</a></code> | <code>bool \| cdktf.IResolvable</code> | Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering. |

---

##### `failover_across_pools`<sup>Optional</sup> <a name="failover_across_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting.property.failoverAcrossPools"></a>

```python
failover_across_pools: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering.

When set false (the default) zero-downtime failover will only occur between origins within the same pool. See `session_affinity_attributes` for control over when sessions are broken or reassigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#failover_across_pools LoadBalancer#failover_across_pools}

---

### LoadBalancerRulesOverridesLocationStrategy <a name="LoadBalancerRulesOverridesLocationStrategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerRulesOverridesLocationStrategy(
  mode: str = None,
  prefer_ecs: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.property.mode">mode</a></code> | <code>str</code> | Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.property.preferEcs">prefer_ecs</a></code> | <code>str</code> | Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.property.mode"></a>

```python
mode: str
```

- *Type:* str

Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful.

* `"pop"`: Use the Cloudflare PoP location.
* `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is unsuccessful, use the Cloudflare PoP location.
  Available values: "pop", "resolver_ip".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#mode LoadBalancer#mode}

---

##### `prefer_ecs`<sup>Optional</sup> <a name="prefer_ecs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy.property.preferEcs"></a>

```python
prefer_ecs: str
```

- *Type:* str

Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location.

* `"always"`: Always prefer ECS.
* `"never"`: Never prefer ECS.
* `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
* `"geo"`: Prefer ECS only when `steering_policy="geo"`.
  Available values: "always", "never", "proximity", "geo".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#prefer_ecs LoadBalancer#prefer_ecs}

---

### LoadBalancerRulesOverridesRandomSteering <a name="LoadBalancerRulesOverridesRandomSteering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerRulesOverridesRandomSteering(
  default_weight: typing.Union[int, float] = None,
  pool_weights: typing.Mapping[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.property.defaultWeight">default_weight</a></code> | <code>typing.Union[int, float]</code> | The default weight for pools in the load balancer that are not specified in the pool_weights map. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.property.poolWeights">pool_weights</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer. |

---

##### `default_weight`<sup>Optional</sup> <a name="default_weight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.property.defaultWeight"></a>

```python
default_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default weight for pools in the load balancer that are not specified in the pool_weights map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#default_weight LoadBalancer#default_weight}

---

##### `pool_weights`<sup>Optional</sup> <a name="pool_weights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering.property.poolWeights"></a>

```python
pool_weights: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#pool_weights LoadBalancer#pool_weights}

---

### LoadBalancerRulesOverridesSessionAffinityAttributes <a name="LoadBalancerRulesOverridesSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes(
  drain_duration: typing.Union[int, float] = None,
  headers: typing.List[str] = None,
  require_all_headers: bool | IResolvable = None,
  samesite: str = None,
  secure: str = None,
  zero_downtime_failover: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.drainDuration">drain_duration</a></code> | <code>typing.Union[int, float]</code> | Configures the drain duration in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.headers">headers</a></code> | <code>typing.List[str]</code> | Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.requireAllHeaders">require_all_headers</a></code> | <code>bool \| cdktf.IResolvable</code> | When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.samesite">samesite</a></code> | <code>str</code> | Configures the SameSite attribute on session affinity cookie. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.secure">secure</a></code> | <code>str</code> | Configures the Secure attribute on session affinity cookie. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.zeroDowntimeFailover">zero_downtime_failover</a></code> | <code>str</code> | Configures the zero-downtime failover between origins within a pool when session affinity is enabled. |

---

##### `drain_duration`<sup>Optional</sup> <a name="drain_duration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.drainDuration"></a>

```python
drain_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Configures the drain duration in seconds.

This field is only used when session affinity is enabled on the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#drain_duration LoadBalancer#drain_duration}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.headers"></a>

```python
headers: typing.List[str]
```

- *Type:* typing.List[str]

Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled.

At least one HTTP header name must be provided. To specify the exact cookies to be used, include an item in the following format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything after the colon is a comma-separated list of cookie names. Providing only `"cookie"` will result in all cookies being used. The default max number of HTTP header names that can be provided depends on your plan: 5 for Enterprise, 1 for all other plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#headers LoadBalancer#headers}

---

##### `require_all_headers`<sup>Optional</sup> <a name="require_all_headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.requireAllHeaders"></a>

```python
require_all_headers: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used.

The supported values are: - `"true"`: Load balancing requests must contain *all* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created. - `"false"`: Load balancing requests must contain *at least one* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#require_all_headers LoadBalancer#require_all_headers}

---

##### `samesite`<sup>Optional</sup> <a name="samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.samesite"></a>

```python
samesite: str
```

- *Type:* str

Configures the SameSite attribute on session affinity cookie.

Value "Auto" will be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note: when using value "None", the secure attribute can not be set to "Never".
Available values: "Auto", "Lax", "None", "Strict".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#samesite LoadBalancer#samesite}

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.secure"></a>

```python
secure: str
```

- *Type:* str

Configures the Secure attribute on session affinity cookie.

Value "Always" indicates the Secure attribute will be set in the Set-Cookie header, "Never" indicates the Secure attribute will not be set, and "Auto" will set the Secure attribute depending if Always Use HTTPS is enabled.
Available values: "Auto", "Always", "Never".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#secure LoadBalancer#secure}

---

##### `zero_downtime_failover`<sup>Optional</sup> <a name="zero_downtime_failover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes.property.zeroDowntimeFailover"></a>

```python
zero_downtime_failover: str
```

- *Type:* str

Configures the zero-downtime failover between origins within a pool when session affinity is enabled.

This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. The supported values are: - `"none"`: No failover takes place for sessions pinned to the origin (default). - `"temporary"`: Traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping. - `"sticky"`: The session affinity cookie is updated and subsequent requests are sent to the new origin. Note: Zero-downtime failover with sticky sessions is currently not supported for session affinity by header.
Available values: "none", "temporary", "sticky".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#zero_downtime_failover LoadBalancer#zero_downtime_failover}

---

### LoadBalancerSessionAffinityAttributes <a name="LoadBalancerSessionAffinityAttributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerSessionAffinityAttributes(
  drain_duration: typing.Union[int, float] = None,
  headers: typing.List[str] = None,
  require_all_headers: bool | IResolvable = None,
  samesite: str = None,
  secure: str = None,
  zero_downtime_failover: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.drainDuration">drain_duration</a></code> | <code>typing.Union[int, float]</code> | Configures the drain duration in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.headers">headers</a></code> | <code>typing.List[str]</code> | Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.requireAllHeaders">require_all_headers</a></code> | <code>bool \| cdktf.IResolvable</code> | When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.samesite">samesite</a></code> | <code>str</code> | Configures the SameSite attribute on session affinity cookie. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.secure">secure</a></code> | <code>str</code> | Configures the Secure attribute on session affinity cookie. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.zeroDowntimeFailover">zero_downtime_failover</a></code> | <code>str</code> | Configures the zero-downtime failover between origins within a pool when session affinity is enabled. |

---

##### `drain_duration`<sup>Optional</sup> <a name="drain_duration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.drainDuration"></a>

```python
drain_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Configures the drain duration in seconds.

This field is only used when session affinity is enabled on the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#drain_duration LoadBalancer#drain_duration}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.headers"></a>

```python
headers: typing.List[str]
```

- *Type:* typing.List[str]

Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled.

At least one HTTP header name must be provided. To specify the exact cookies to be used, include an item in the following format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything after the colon is a comma-separated list of cookie names. Providing only `"cookie"` will result in all cookies being used. The default max number of HTTP header names that can be provided depends on your plan: 5 for Enterprise, 1 for all other plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#headers LoadBalancer#headers}

---

##### `require_all_headers`<sup>Optional</sup> <a name="require_all_headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.requireAllHeaders"></a>

```python
require_all_headers: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used.

The supported values are: - `"true"`: Load balancing requests must contain *all* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created. - `"false"`: Load balancing requests must contain *at least one* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#require_all_headers LoadBalancer#require_all_headers}

---

##### `samesite`<sup>Optional</sup> <a name="samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.samesite"></a>

```python
samesite: str
```

- *Type:* str

Configures the SameSite attribute on session affinity cookie.

Value "Auto" will be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note: when using value "None", the secure attribute can not be set to "Never".
Available values: "Auto", "Lax", "None", "Strict".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#samesite LoadBalancer#samesite}

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.secure"></a>

```python
secure: str
```

- *Type:* str

Configures the Secure attribute on session affinity cookie.

Value "Always" indicates the Secure attribute will be set in the Set-Cookie header, "Never" indicates the Secure attribute will not be set, and "Auto" will set the Secure attribute depending if Always Use HTTPS is enabled.
Available values: "Auto", "Always", "Never".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#secure LoadBalancer#secure}

---

##### `zero_downtime_failover`<sup>Optional</sup> <a name="zero_downtime_failover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes.property.zeroDowntimeFailover"></a>

```python
zero_downtime_failover: str
```

- *Type:* str

Configures the zero-downtime failover between origins within a pool when session affinity is enabled.

This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. The supported values are: - `"none"`: No failover takes place for sessions pinned to the origin (default). - `"temporary"`: Traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping. - `"sticky"`: The session affinity cookie is updated and subsequent requests are sent to the new origin. Note: Zero-downtime failover with sticky sessions is currently not supported for session affinity by header.
Available values: "none", "temporary", "sticky".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#zero_downtime_failover LoadBalancer#zero_downtime_failover}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerAdaptiveRoutingOutputReference <a name="LoadBalancerAdaptiveRoutingOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerAdaptiveRoutingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resetFailoverAcrossPools">reset_failover_across_pools</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_failover_across_pools` <a name="reset_failover_across_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.resetFailoverAcrossPools"></a>

```python
def reset_failover_across_pools() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.failoverAcrossPoolsInput">failover_across_pools_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.failoverAcrossPools">failover_across_pools</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failover_across_pools_input`<sup>Optional</sup> <a name="failover_across_pools_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.failoverAcrossPoolsInput"></a>

```python
failover_across_pools_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `failover_across_pools`<sup>Required</sup> <a name="failover_across_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.failoverAcrossPools"></a>

```python
failover_across_pools: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRoutingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LoadBalancerAdaptiveRouting
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerAdaptiveRouting">LoadBalancerAdaptiveRouting</a>

---


### LoadBalancerLocationStrategyOutputReference <a name="LoadBalancerLocationStrategyOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerLocationStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resetPreferEcs">reset_prefer_ecs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_prefer_ecs` <a name="reset_prefer_ecs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.resetPreferEcs"></a>

```python
def reset_prefer_ecs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.preferEcsInput">prefer_ecs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.preferEcs">prefer_ecs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `prefer_ecs_input`<sup>Optional</sup> <a name="prefer_ecs_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.preferEcsInput"></a>

```python
prefer_ecs_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `prefer_ecs`<sup>Required</sup> <a name="prefer_ecs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.preferEcs"></a>

```python
prefer_ecs: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LoadBalancerLocationStrategy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerLocationStrategy">LoadBalancerLocationStrategy</a>

---


### LoadBalancerRandomSteeringOutputReference <a name="LoadBalancerRandomSteeringOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerRandomSteeringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resetDefaultWeight">reset_default_weight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resetPoolWeights">reset_pool_weights</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_weight` <a name="reset_default_weight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resetDefaultWeight"></a>

```python
def reset_default_weight() -> None
```

##### `reset_pool_weights` <a name="reset_pool_weights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.resetPoolWeights"></a>

```python
def reset_pool_weights() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.defaultWeightInput">default_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.poolWeightsInput">pool_weights_input</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.defaultWeight">default_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.poolWeights">pool_weights</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_weight_input`<sup>Optional</sup> <a name="default_weight_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.defaultWeightInput"></a>

```python
default_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pool_weights_input`<sup>Optional</sup> <a name="pool_weights_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.poolWeightsInput"></a>

```python
pool_weights_input: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

---

##### `default_weight`<sup>Required</sup> <a name="default_weight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.defaultWeight"></a>

```python
default_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pool_weights`<sup>Required</sup> <a name="pool_weights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.poolWeights"></a>

```python
pool_weights: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteeringOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LoadBalancerRandomSteering
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRandomSteering">LoadBalancerRandomSteering</a>

---


### LoadBalancerRulesFixedResponseOutputReference <a name="LoadBalancerRulesFixedResponseOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerRulesFixedResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetMessageBody">reset_message_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_message_body` <a name="reset_message_body" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetMessageBody"></a>

```python
def reset_message_body() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.messageBodyInput">message_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.messageBody">message_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `message_body_input`<sup>Optional</sup> <a name="message_body_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.messageBodyInput"></a>

```python
message_body_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.statusCodeInput"></a>

```python
status_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `message_body`<sup>Required</sup> <a name="message_body" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.messageBody"></a>

```python
message_body: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LoadBalancerRulesFixedResponse
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a>

---


### LoadBalancerRulesList <a name="LoadBalancerRulesList" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LoadBalancerRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LoadBalancerRules]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>]

---


### LoadBalancerRulesOutputReference <a name="LoadBalancerRulesOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putFixedResponse">put_fixed_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides">put_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetFixedResponse">reset_fixed_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetOverrides">reset_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetTerminates">reset_terminates</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fixed_response` <a name="put_fixed_response" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putFixedResponse"></a>

```python
def put_fixed_response(
  content_type: str = None,
  location: str = None,
  message_body: str = None,
  status_code: typing.Union[int, float] = None
) -> None
```

###### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putFixedResponse.parameter.contentType"></a>

- *Type:* str

The http 'Content-Type' header to include in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#content_type LoadBalancer#content_type}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putFixedResponse.parameter.location"></a>

- *Type:* str

The http 'Location' header to include in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#location LoadBalancer#location}

---

###### `message_body`<sup>Optional</sup> <a name="message_body" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putFixedResponse.parameter.messageBody"></a>

- *Type:* str

Text to include as the http body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#message_body LoadBalancer#message_body}

---

###### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putFixedResponse.parameter.statusCode"></a>

- *Type:* typing.Union[int, float]

The http status code to respond with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#status_code LoadBalancer#status_code}

---

##### `put_overrides` <a name="put_overrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides"></a>

```python
def put_overrides(
  adaptive_routing: LoadBalancerRulesOverridesAdaptiveRouting = None,
  country_pools: IResolvable | typing.Mapping[typing.List[str]] = None,
  default_pools: typing.List[str] = None,
  fallback_pool: str = None,
  location_strategy: LoadBalancerRulesOverridesLocationStrategy = None,
  pop_pools: IResolvable | typing.Mapping[typing.List[str]] = None,
  random_steering: LoadBalancerRulesOverridesRandomSteering = None,
  region_pools: IResolvable | typing.Mapping[typing.List[str]] = None,
  session_affinity: str = None,
  session_affinity_attributes: LoadBalancerRulesOverridesSessionAffinityAttributes = None,
  session_affinity_ttl: typing.Union[int, float] = None,
  steering_policy: str = None,
  ttl: typing.Union[int, float] = None
) -> None
```

###### `adaptive_routing`<sup>Optional</sup> <a name="adaptive_routing" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides.parameter.adaptiveRouting"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a>

Controls features that modify the routing of requests to pools and origins in response to dynamic conditions, such as during the interval between active health monitoring requests.

For example, zero-downtime failover occurs immediately when an origin becomes unavailable due to HTTP 521, 522, or 523 response codes. If there is another healthy origin in the same pool, the request is retried once against this alternate origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#adaptive_routing LoadBalancer#adaptive_routing}

---

###### `country_pools`<sup>Optional</sup> <a name="country_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides.parameter.countryPools"></a>

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

A mapping of country codes to a list of pool IDs (ordered by their failover priority) for the given country.

Any country not explicitly defined will fall back to using the corresponding region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#country_pools LoadBalancer#country_pools}

---

###### `default_pools`<sup>Optional</sup> <a name="default_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides.parameter.defaultPools"></a>

- *Type:* typing.List[str]

A list of pool IDs ordered by their failover priority.

Pools defined here are used by default, or when region_pools are not configured for a given region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#default_pools LoadBalancer#default_pools}

---

###### `fallback_pool`<sup>Optional</sup> <a name="fallback_pool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides.parameter.fallbackPool"></a>

- *Type:* str

The pool ID to use when all other pools are detected as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#fallback_pool LoadBalancer#fallback_pool}

---

###### `location_strategy`<sup>Optional</sup> <a name="location_strategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides.parameter.locationStrategy"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a>

Controls location-based steering for non-proxied requests. See `steering_policy` to learn how steering is affected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#location_strategy LoadBalancer#location_strategy}

---

###### `pop_pools`<sup>Optional</sup> <a name="pop_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides.parameter.popPools"></a>

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

Enterprise only: A mapping of Cloudflare PoP identifiers to a list of pool IDs (ordered by their failover priority) for the PoP (datacenter).

Any PoPs not explicitly defined will fall back to using the corresponding country_pool, then region_pool mapping if it exists else to default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#pop_pools LoadBalancer#pop_pools}

---

###### `random_steering`<sup>Optional</sup> <a name="random_steering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides.parameter.randomSteering"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a>

Configures pool weights.

* `steering_policy="random"`: A random pool is selected with probability proportional to pool weights.
* `steering_policy="least_outstanding_requests"`: Use pool weights to scale each pool's outstanding requests.
* `steering_policy="least_connections"`: Use pool weights to scale each pool's open connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#random_steering LoadBalancer#random_steering}

---

###### `region_pools`<sup>Optional</sup> <a name="region_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides.parameter.regionPools"></a>

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

A mapping of region codes to a list of pool IDs (ordered by their failover priority) for the given region.

Any regions not explicitly defined will fall back to using default_pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#region_pools LoadBalancer#region_pools}

---

###### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides.parameter.sessionAffinity"></a>

- *Type:* str

Specifies the type of session affinity the load balancer should use unless specified as `"none"`.

The supported types are: - `"cookie"`: On the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy, then a new origin server is calculated and used. - `"ip_cookie"`: Behaves the same as `"cookie"` except the initial origin selection is stable and based on the client's ip address. - `"header"`: On the first request to a proxied load balancer, a session key based on the configured HTTP headers (see `session_affinity_attributes.headers`) is generated, encoding the request headers used for storing in the load balancer session state which origin the request will be forwarded to. Subsequent requests to the load balancer with the same headers will be sent to the same origin server, for the duration of the session and as long as the origin server remains healthy. If the session has been idle for the duration of `session_affinity_ttl` seconds or the origin server is unhealthy, then a new origin server is calculated and used. See `headers` in `session_affinity_attributes` for additional required configuration.
Available values: "none", "cookie", "ip_cookie", "header".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity LoadBalancer#session_affinity}

---

###### `session_affinity_attributes`<sup>Optional</sup> <a name="session_affinity_attributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides.parameter.sessionAffinityAttributes"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a>

Configures attributes for session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity_attributes LoadBalancer#session_affinity_attributes}

---

###### `session_affinity_ttl`<sup>Optional</sup> <a name="session_affinity_ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides.parameter.sessionAffinityTtl"></a>

- *Type:* typing.Union[int, float]

Time, in seconds, until a client's session expires after being created.

Once the expiry time has been reached, subsequent requests may get sent to a different origin server. The accepted ranges per `session_affinity` policy are: - `"cookie"` / `"ip_cookie"`: The current default of 23 hours will be used unless explicitly set. The accepted range of values is between [1800, 604800]. - `"header"`: The current default of 1800 seconds will be used unless explicitly set. The accepted range of values is between [30, 3600]. Note: With session affinity by header, sessions only expire after they haven't been used for the number of seconds specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#session_affinity_ttl LoadBalancer#session_affinity_ttl}

---

###### `steering_policy`<sup>Optional</sup> <a name="steering_policy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides.parameter.steeringPolicy"></a>

- *Type:* str

Steering Policy for this load balancer.

* `"off"`: Use `default_pools`.
* `"geo"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`.
* `"random"`: Select a pool randomly.
* `"dynamic_latency"`: Use round trip time to select the closest pool in default_pools (requires pool health checks).
* `"proximity"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests.
* `"least_outstanding_requests"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others.
* `"least_connections"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of open connections. Pools with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.
* `""`: Will map to `"geo"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `"off"`.
  Available values: "off", "geo", "random", "dynamic_latency", "proximity", "least_outstanding_requests", "least_connections", "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#steering_policy LoadBalancer#steering_policy}

---

###### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.putOverrides.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Time to live (TTL) of the DNS entry for the IP address returned by this load balancer.

This only applies to gray-clouded (unproxied) load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#ttl LoadBalancer#ttl}

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_fixed_response` <a name="reset_fixed_response" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetFixedResponse"></a>

```python
def reset_fixed_response() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_overrides` <a name="reset_overrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetOverrides"></a>

```python
def reset_overrides() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_terminates` <a name="reset_terminates" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.resetTerminates"></a>

```python
def reset_terminates() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fixedResponse">fixed_response</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference">LoadBalancerRulesFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference">LoadBalancerRulesOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fixedResponseInput">fixed_response_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.overridesInput">overrides_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.terminatesInput">terminates_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.terminates">terminates</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fixed_response`<sup>Required</sup> <a name="fixed_response" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fixedResponse"></a>

```python
fixed_response: LoadBalancerRulesFixedResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponseOutputReference">LoadBalancerRulesFixedResponseOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.overrides"></a>

```python
overrides: LoadBalancerRulesOverridesOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference">LoadBalancerRulesOverridesOutputReference</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `fixed_response_input`<sup>Optional</sup> <a name="fixed_response_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.fixedResponseInput"></a>

```python
fixed_response_input: IResolvable | LoadBalancerRulesFixedResponse
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesFixedResponse">LoadBalancerRulesFixedResponse</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `overrides_input`<sup>Optional</sup> <a name="overrides_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.overridesInput"></a>

```python
overrides_input: IResolvable | LoadBalancerRulesOverrides
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a>

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `terminates_input`<sup>Optional</sup> <a name="terminates_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.terminatesInput"></a>

```python
terminates_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `terminates`<sup>Required</sup> <a name="terminates" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.terminates"></a>

```python
terminates: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LoadBalancerRules
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRules">LoadBalancerRules</a>

---


### LoadBalancerRulesOverridesAdaptiveRoutingOutputReference <a name="LoadBalancerRulesOverridesAdaptiveRoutingOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resetFailoverAcrossPools">reset_failover_across_pools</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_failover_across_pools` <a name="reset_failover_across_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.resetFailoverAcrossPools"></a>

```python
def reset_failover_across_pools() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPoolsInput">failover_across_pools_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPools">failover_across_pools</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failover_across_pools_input`<sup>Optional</sup> <a name="failover_across_pools_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPoolsInput"></a>

```python
failover_across_pools_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `failover_across_pools`<sup>Required</sup> <a name="failover_across_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.failoverAcrossPools"></a>

```python
failover_across_pools: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LoadBalancerRulesOverridesAdaptiveRouting
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a>

---


### LoadBalancerRulesOverridesLocationStrategyOutputReference <a name="LoadBalancerRulesOverridesLocationStrategyOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resetPreferEcs">reset_prefer_ecs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_prefer_ecs` <a name="reset_prefer_ecs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.resetPreferEcs"></a>

```python
def reset_prefer_ecs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.preferEcsInput">prefer_ecs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.preferEcs">prefer_ecs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `prefer_ecs_input`<sup>Optional</sup> <a name="prefer_ecs_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.preferEcsInput"></a>

```python
prefer_ecs_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `prefer_ecs`<sup>Required</sup> <a name="prefer_ecs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.preferEcs"></a>

```python
prefer_ecs: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LoadBalancerRulesOverridesLocationStrategy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a>

---


### LoadBalancerRulesOverridesOutputReference <a name="LoadBalancerRulesOverridesOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerRulesOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putAdaptiveRouting">put_adaptive_routing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putLocationStrategy">put_location_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putRandomSteering">put_random_steering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putSessionAffinityAttributes">put_session_affinity_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetAdaptiveRouting">reset_adaptive_routing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetCountryPools">reset_country_pools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetDefaultPools">reset_default_pools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetFallbackPool">reset_fallback_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetLocationStrategy">reset_location_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetPopPools">reset_pop_pools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetRandomSteering">reset_random_steering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetRegionPools">reset_region_pools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinity">reset_session_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinityAttributes">reset_session_affinity_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinityTtl">reset_session_affinity_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSteeringPolicy">reset_steering_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_adaptive_routing` <a name="put_adaptive_routing" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putAdaptiveRouting"></a>

```python
def put_adaptive_routing(
  failover_across_pools: bool | IResolvable = None
) -> None
```

###### `failover_across_pools`<sup>Optional</sup> <a name="failover_across_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putAdaptiveRouting.parameter.failoverAcrossPools"></a>

- *Type:* bool | cdktf.IResolvable

Extends zero-downtime failover of requests to healthy origins from alternate pools, when no healthy alternate exists in the same pool, according to the failover order defined by traffic and origin steering.

When set false (the default) zero-downtime failover will only occur between origins within the same pool. See `session_affinity_attributes` for control over when sessions are broken or reassigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#failover_across_pools LoadBalancer#failover_across_pools}

---

##### `put_location_strategy` <a name="put_location_strategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putLocationStrategy"></a>

```python
def put_location_strategy(
  mode: str = None,
  prefer_ecs: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putLocationStrategy.parameter.mode"></a>

- *Type:* str

Determines the authoritative location when ECS is not preferred, does not exist in the request, or its GeoIP lookup is unsuccessful.

* `"pop"`: Use the Cloudflare PoP location.
* `"resolver_ip"`: Use the DNS resolver GeoIP location. If the GeoIP lookup is unsuccessful, use the Cloudflare PoP location.
  Available values: "pop", "resolver_ip".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#mode LoadBalancer#mode}

---

###### `prefer_ecs`<sup>Optional</sup> <a name="prefer_ecs" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putLocationStrategy.parameter.preferEcs"></a>

- *Type:* str

Whether the EDNS Client Subnet (ECS) GeoIP should be preferred as the authoritative location.

* `"always"`: Always prefer ECS.
* `"never"`: Never prefer ECS.
* `"proximity"`: Prefer ECS only when `steering_policy="proximity"`.
* `"geo"`: Prefer ECS only when `steering_policy="geo"`.
  Available values: "always", "never", "proximity", "geo".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#prefer_ecs LoadBalancer#prefer_ecs}

---

##### `put_random_steering` <a name="put_random_steering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putRandomSteering"></a>

```python
def put_random_steering(
  default_weight: typing.Union[int, float] = None,
  pool_weights: typing.Mapping[typing.Union[int, float]] = None
) -> None
```

###### `default_weight`<sup>Optional</sup> <a name="default_weight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putRandomSteering.parameter.defaultWeight"></a>

- *Type:* typing.Union[int, float]

The default weight for pools in the load balancer that are not specified in the pool_weights map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#default_weight LoadBalancer#default_weight}

---

###### `pool_weights`<sup>Optional</sup> <a name="pool_weights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putRandomSteering.parameter.poolWeights"></a>

- *Type:* typing.Mapping[typing.Union[int, float]]

A mapping of pool IDs to custom weights. The weight is relative to other pools in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#pool_weights LoadBalancer#pool_weights}

---

##### `put_session_affinity_attributes` <a name="put_session_affinity_attributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putSessionAffinityAttributes"></a>

```python
def put_session_affinity_attributes(
  drain_duration: typing.Union[int, float] = None,
  headers: typing.List[str] = None,
  require_all_headers: bool | IResolvable = None,
  samesite: str = None,
  secure: str = None,
  zero_downtime_failover: str = None
) -> None
```

###### `drain_duration`<sup>Optional</sup> <a name="drain_duration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putSessionAffinityAttributes.parameter.drainDuration"></a>

- *Type:* typing.Union[int, float]

Configures the drain duration in seconds.

This field is only used when session affinity is enabled on the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#drain_duration LoadBalancer#drain_duration}

---

###### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putSessionAffinityAttributes.parameter.headers"></a>

- *Type:* typing.List[str]

Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled.

At least one HTTP header name must be provided. To specify the exact cookies to be used, include an item in the following format: `"cookie:<cookie-name-1>,<cookie-name-2>"` (example) where everything after the colon is a comma-separated list of cookie names. Providing only `"cookie"` will result in all cookies being used. The default max number of HTTP header names that can be provided depends on your plan: 5 for Enterprise, 1 for all other plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#headers LoadBalancer#headers}

---

###### `require_all_headers`<sup>Optional</sup> <a name="require_all_headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putSessionAffinityAttributes.parameter.requireAllHeaders"></a>

- *Type:* bool | cdktf.IResolvable

When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used.

The supported values are: - `"true"`: Load balancing requests must contain *all* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created. - `"false"`: Load balancing requests must contain *at least one* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#require_all_headers LoadBalancer#require_all_headers}

---

###### `samesite`<sup>Optional</sup> <a name="samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putSessionAffinityAttributes.parameter.samesite"></a>

- *Type:* str

Configures the SameSite attribute on session affinity cookie.

Value "Auto" will be translated to "Lax" or "None" depending if Always Use HTTPS is enabled. Note: when using value "None", the secure attribute can not be set to "Never".
Available values: "Auto", "Lax", "None", "Strict".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#samesite LoadBalancer#samesite}

---

###### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putSessionAffinityAttributes.parameter.secure"></a>

- *Type:* str

Configures the Secure attribute on session affinity cookie.

Value "Always" indicates the Secure attribute will be set in the Set-Cookie header, "Never" indicates the Secure attribute will not be set, and "Auto" will set the Secure attribute depending if Always Use HTTPS is enabled.
Available values: "Auto", "Always", "Never".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#secure LoadBalancer#secure}

---

###### `zero_downtime_failover`<sup>Optional</sup> <a name="zero_downtime_failover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.putSessionAffinityAttributes.parameter.zeroDowntimeFailover"></a>

- *Type:* str

Configures the zero-downtime failover between origins within a pool when session affinity is enabled.

This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. The supported values are: - `"none"`: No failover takes place for sessions pinned to the origin (default). - `"temporary"`: Traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping. - `"sticky"`: The session affinity cookie is updated and subsequent requests are sent to the new origin. Note: Zero-downtime failover with sticky sessions is currently not supported for session affinity by header.
Available values: "none", "temporary", "sticky".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/load_balancer#zero_downtime_failover LoadBalancer#zero_downtime_failover}

---

##### `reset_adaptive_routing` <a name="reset_adaptive_routing" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetAdaptiveRouting"></a>

```python
def reset_adaptive_routing() -> None
```

##### `reset_country_pools` <a name="reset_country_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetCountryPools"></a>

```python
def reset_country_pools() -> None
```

##### `reset_default_pools` <a name="reset_default_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetDefaultPools"></a>

```python
def reset_default_pools() -> None
```

##### `reset_fallback_pool` <a name="reset_fallback_pool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetFallbackPool"></a>

```python
def reset_fallback_pool() -> None
```

##### `reset_location_strategy` <a name="reset_location_strategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetLocationStrategy"></a>

```python
def reset_location_strategy() -> None
```

##### `reset_pop_pools` <a name="reset_pop_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetPopPools"></a>

```python
def reset_pop_pools() -> None
```

##### `reset_random_steering` <a name="reset_random_steering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetRandomSteering"></a>

```python
def reset_random_steering() -> None
```

##### `reset_region_pools` <a name="reset_region_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetRegionPools"></a>

```python
def reset_region_pools() -> None
```

##### `reset_session_affinity` <a name="reset_session_affinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinity"></a>

```python
def reset_session_affinity() -> None
```

##### `reset_session_affinity_attributes` <a name="reset_session_affinity_attributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinityAttributes"></a>

```python
def reset_session_affinity_attributes() -> None
```

##### `reset_session_affinity_ttl` <a name="reset_session_affinity_ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSessionAffinityTtl"></a>

```python
def reset_session_affinity_ttl() -> None
```

##### `reset_steering_policy` <a name="reset_steering_policy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetSteeringPolicy"></a>

```python
def reset_steering_policy() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.adaptiveRouting">adaptive_routing</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference">LoadBalancerRulesOverridesAdaptiveRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.locationStrategy">location_strategy</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference">LoadBalancerRulesOverridesLocationStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.randomSteering">random_steering</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference">LoadBalancerRulesOverridesRandomSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityAttributes">session_affinity_attributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference">LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.adaptiveRoutingInput">adaptive_routing_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.countryPoolsInput">country_pools_input</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.defaultPoolsInput">default_pools_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fallbackPoolInput">fallback_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.locationStrategyInput">location_strategy_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.popPoolsInput">pop_pools_input</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.randomSteeringInput">random_steering_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.regionPoolsInput">region_pools_input</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityAttributesInput">session_affinity_attributes_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityInput">session_affinity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityTtlInput">session_affinity_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.steeringPolicyInput">steering_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.countryPools">country_pools</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.defaultPools">default_pools</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fallbackPool">fallback_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.popPools">pop_pools</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.regionPools">region_pools</a></code> | <code>cdktf.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinity">session_affinity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityTtl">session_affinity_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.steeringPolicy">steering_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `adaptive_routing`<sup>Required</sup> <a name="adaptive_routing" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.adaptiveRouting"></a>

```python
adaptive_routing: LoadBalancerRulesOverridesAdaptiveRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRoutingOutputReference">LoadBalancerRulesOverridesAdaptiveRoutingOutputReference</a>

---

##### `location_strategy`<sup>Required</sup> <a name="location_strategy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.locationStrategy"></a>

```python
location_strategy: LoadBalancerRulesOverridesLocationStrategyOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategyOutputReference">LoadBalancerRulesOverridesLocationStrategyOutputReference</a>

---

##### `random_steering`<sup>Required</sup> <a name="random_steering" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.randomSteering"></a>

```python
random_steering: LoadBalancerRulesOverridesRandomSteeringOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference">LoadBalancerRulesOverridesRandomSteeringOutputReference</a>

---

##### `session_affinity_attributes`<sup>Required</sup> <a name="session_affinity_attributes" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityAttributes"></a>

```python
session_affinity_attributes: LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference">LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference</a>

---

##### `adaptive_routing_input`<sup>Optional</sup> <a name="adaptive_routing_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.adaptiveRoutingInput"></a>

```python
adaptive_routing_input: IResolvable | LoadBalancerRulesOverridesAdaptiveRouting
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesAdaptiveRouting">LoadBalancerRulesOverridesAdaptiveRouting</a>

---

##### `country_pools_input`<sup>Optional</sup> <a name="country_pools_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.countryPoolsInput"></a>

```python
country_pools_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

---

##### `default_pools_input`<sup>Optional</sup> <a name="default_pools_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.defaultPoolsInput"></a>

```python
default_pools_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fallback_pool_input`<sup>Optional</sup> <a name="fallback_pool_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fallbackPoolInput"></a>

```python
fallback_pool_input: str
```

- *Type:* str

---

##### `location_strategy_input`<sup>Optional</sup> <a name="location_strategy_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.locationStrategyInput"></a>

```python
location_strategy_input: IResolvable | LoadBalancerRulesOverridesLocationStrategy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesLocationStrategy">LoadBalancerRulesOverridesLocationStrategy</a>

---

##### `pop_pools_input`<sup>Optional</sup> <a name="pop_pools_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.popPoolsInput"></a>

```python
pop_pools_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

---

##### `random_steering_input`<sup>Optional</sup> <a name="random_steering_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.randomSteeringInput"></a>

```python
random_steering_input: IResolvable | LoadBalancerRulesOverridesRandomSteering
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a>

---

##### `region_pools_input`<sup>Optional</sup> <a name="region_pools_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.regionPoolsInput"></a>

```python
region_pools_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

---

##### `session_affinity_attributes_input`<sup>Optional</sup> <a name="session_affinity_attributes_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityAttributesInput"></a>

```python
session_affinity_attributes_input: IResolvable | LoadBalancerRulesOverridesSessionAffinityAttributes
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a>

---

##### `session_affinity_input`<sup>Optional</sup> <a name="session_affinity_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityInput"></a>

```python
session_affinity_input: str
```

- *Type:* str

---

##### `session_affinity_ttl_input`<sup>Optional</sup> <a name="session_affinity_ttl_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityTtlInput"></a>

```python
session_affinity_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `steering_policy_input`<sup>Optional</sup> <a name="steering_policy_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.steeringPolicyInput"></a>

```python
steering_policy_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `country_pools`<sup>Required</sup> <a name="country_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.countryPools"></a>

```python
country_pools: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

---

##### `default_pools`<sup>Required</sup> <a name="default_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.defaultPools"></a>

```python
default_pools: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fallback_pool`<sup>Required</sup> <a name="fallback_pool" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.fallbackPool"></a>

```python
fallback_pool: str
```

- *Type:* str

---

##### `pop_pools`<sup>Required</sup> <a name="pop_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.popPools"></a>

```python
pop_pools: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

---

##### `region_pools`<sup>Required</sup> <a name="region_pools" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.regionPools"></a>

```python
region_pools: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktf.IResolvable | typing.Mapping[typing.List[str]]

---

##### `session_affinity`<sup>Required</sup> <a name="session_affinity" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinity"></a>

```python
session_affinity: str
```

- *Type:* str

---

##### `session_affinity_ttl`<sup>Required</sup> <a name="session_affinity_ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.sessionAffinityTtl"></a>

```python
session_affinity_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `steering_policy`<sup>Required</sup> <a name="steering_policy" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.steeringPolicy"></a>

```python
steering_policy: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LoadBalancerRulesOverrides
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverrides">LoadBalancerRulesOverrides</a>

---


### LoadBalancerRulesOverridesRandomSteeringOutputReference <a name="LoadBalancerRulesOverridesRandomSteeringOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resetDefaultWeight">reset_default_weight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resetPoolWeights">reset_pool_weights</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_weight` <a name="reset_default_weight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resetDefaultWeight"></a>

```python
def reset_default_weight() -> None
```

##### `reset_pool_weights` <a name="reset_pool_weights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.resetPoolWeights"></a>

```python
def reset_pool_weights() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.defaultWeightInput">default_weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.poolWeightsInput">pool_weights_input</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.defaultWeight">default_weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.poolWeights">pool_weights</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_weight_input`<sup>Optional</sup> <a name="default_weight_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.defaultWeightInput"></a>

```python
default_weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pool_weights_input`<sup>Optional</sup> <a name="pool_weights_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.poolWeightsInput"></a>

```python
pool_weights_input: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

---

##### `default_weight`<sup>Required</sup> <a name="default_weight" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.defaultWeight"></a>

```python
default_weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pool_weights`<sup>Required</sup> <a name="pool_weights" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.poolWeights"></a>

```python
pool_weights: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteeringOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LoadBalancerRulesOverridesRandomSteering
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesRandomSteering">LoadBalancerRulesOverridesRandomSteering</a>

---


### LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference <a name="LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetDrainDuration">reset_drain_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetRequireAllHeaders">reset_require_all_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetSamesite">reset_samesite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetSecure">reset_secure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetZeroDowntimeFailover">reset_zero_downtime_failover</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_drain_duration` <a name="reset_drain_duration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetDrainDuration"></a>

```python
def reset_drain_duration() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_require_all_headers` <a name="reset_require_all_headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetRequireAllHeaders"></a>

```python
def reset_require_all_headers() -> None
```

##### `reset_samesite` <a name="reset_samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetSamesite"></a>

```python
def reset_samesite() -> None
```

##### `reset_secure` <a name="reset_secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetSecure"></a>

```python
def reset_secure() -> None
```

##### `reset_zero_downtime_failover` <a name="reset_zero_downtime_failover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.resetZeroDowntimeFailover"></a>

```python
def reset_zero_downtime_failover() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.drainDurationInput">drain_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.headersInput">headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeadersInput">require_all_headers_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.samesiteInput">samesite_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.secureInput">secure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailoverInput">zero_downtime_failover_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.drainDuration">drain_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.headers">headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeaders">require_all_headers</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.samesite">samesite</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.secure">secure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover">zero_downtime_failover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `drain_duration_input`<sup>Optional</sup> <a name="drain_duration_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.drainDurationInput"></a>

```python
drain_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.headersInput"></a>

```python
headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_all_headers_input`<sup>Optional</sup> <a name="require_all_headers_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeadersInput"></a>

```python
require_all_headers_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `samesite_input`<sup>Optional</sup> <a name="samesite_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.samesiteInput"></a>

```python
samesite_input: str
```

- *Type:* str

---

##### `secure_input`<sup>Optional</sup> <a name="secure_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.secureInput"></a>

```python
secure_input: str
```

- *Type:* str

---

##### `zero_downtime_failover_input`<sup>Optional</sup> <a name="zero_downtime_failover_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailoverInput"></a>

```python
zero_downtime_failover_input: str
```

- *Type:* str

---

##### `drain_duration`<sup>Required</sup> <a name="drain_duration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.drainDuration"></a>

```python
drain_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.headers"></a>

```python
headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_all_headers`<sup>Required</sup> <a name="require_all_headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.requireAllHeaders"></a>

```python
require_all_headers: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `samesite`<sup>Required</sup> <a name="samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.samesite"></a>

```python
samesite: str
```

- *Type:* str

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.secure"></a>

```python
secure: str
```

- *Type:* str

---

##### `zero_downtime_failover`<sup>Required</sup> <a name="zero_downtime_failover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover"></a>

```python
zero_downtime_failover: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LoadBalancerRulesOverridesSessionAffinityAttributes
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerRulesOverridesSessionAffinityAttributes">LoadBalancerRulesOverridesSessionAffinityAttributes</a>

---


### LoadBalancerSessionAffinityAttributesOutputReference <a name="LoadBalancerSessionAffinityAttributesOutputReference" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import load_balancer

loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetDrainDuration">reset_drain_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetRequireAllHeaders">reset_require_all_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetSamesite">reset_samesite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetSecure">reset_secure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetZeroDowntimeFailover">reset_zero_downtime_failover</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_drain_duration` <a name="reset_drain_duration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetDrainDuration"></a>

```python
def reset_drain_duration() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_require_all_headers` <a name="reset_require_all_headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetRequireAllHeaders"></a>

```python
def reset_require_all_headers() -> None
```

##### `reset_samesite` <a name="reset_samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetSamesite"></a>

```python
def reset_samesite() -> None
```

##### `reset_secure` <a name="reset_secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetSecure"></a>

```python
def reset_secure() -> None
```

##### `reset_zero_downtime_failover` <a name="reset_zero_downtime_failover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.resetZeroDowntimeFailover"></a>

```python
def reset_zero_downtime_failover() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.drainDurationInput">drain_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.headersInput">headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.requireAllHeadersInput">require_all_headers_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.samesiteInput">samesite_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.secureInput">secure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.zeroDowntimeFailoverInput">zero_downtime_failover_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.drainDuration">drain_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.headers">headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.requireAllHeaders">require_all_headers</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.samesite">samesite</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.secure">secure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover">zero_downtime_failover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `drain_duration_input`<sup>Optional</sup> <a name="drain_duration_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.drainDurationInput"></a>

```python
drain_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.headersInput"></a>

```python
headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_all_headers_input`<sup>Optional</sup> <a name="require_all_headers_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.requireAllHeadersInput"></a>

```python
require_all_headers_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `samesite_input`<sup>Optional</sup> <a name="samesite_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.samesiteInput"></a>

```python
samesite_input: str
```

- *Type:* str

---

##### `secure_input`<sup>Optional</sup> <a name="secure_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.secureInput"></a>

```python
secure_input: str
```

- *Type:* str

---

##### `zero_downtime_failover_input`<sup>Optional</sup> <a name="zero_downtime_failover_input" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.zeroDowntimeFailoverInput"></a>

```python
zero_downtime_failover_input: str
```

- *Type:* str

---

##### `drain_duration`<sup>Required</sup> <a name="drain_duration" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.drainDuration"></a>

```python
drain_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.headers"></a>

```python
headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_all_headers`<sup>Required</sup> <a name="require_all_headers" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.requireAllHeaders"></a>

```python
require_all_headers: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `samesite`<sup>Required</sup> <a name="samesite" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.samesite"></a>

```python
samesite: str
```

- *Type:* str

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.secure"></a>

```python
secure: str
```

- *Type:* str

---

##### `zero_downtime_failover`<sup>Required</sup> <a name="zero_downtime_failover" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.zeroDowntimeFailover"></a>

```python
zero_downtime_failover: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LoadBalancerSessionAffinityAttributes
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.loadBalancer.LoadBalancerSessionAffinityAttributes">LoadBalancerSessionAffinityAttributes</a>

---



