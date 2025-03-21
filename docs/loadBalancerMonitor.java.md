# `loadBalancerMonitor` Submodule <a name="`loadBalancerMonitor` Submodule" id="@cdktf/provider-cloudflare.loadBalancerMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerMonitor <a name="LoadBalancerMonitor" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor cloudflare_load_balancer_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer_monitor.LoadBalancerMonitor;

LoadBalancerMonitor.Builder.create(Construct scope, java.lang.String id)
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
    .accountId(java.lang.String)
//  .allowInsecure(java.lang.Boolean)
//  .allowInsecure(IResolvable)
//  .consecutiveDown(java.lang.Number)
//  .consecutiveUp(java.lang.Number)
//  .description(java.lang.String)
//  .expectedBody(java.lang.String)
//  .expectedCodes(java.lang.String)
//  .followRedirects(java.lang.Boolean)
//  .followRedirects(IResolvable)
//  .header(IResolvable)
//  .header(java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .interval(java.lang.Number)
//  .method(java.lang.String)
//  .path(java.lang.String)
//  .port(java.lang.Number)
//  .probeZone(java.lang.String)
//  .retries(java.lang.Number)
//  .timeout(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.allowInsecure">allowInsecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not validate the certificate when monitor use HTTPS. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.consecutiveDown">consecutiveDown</a></code> | <code>java.lang.Number</code> | To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.consecutiveUp">consecutiveUp</a></code> | <code>java.lang.Number</code> | To be marked healthy the monitored origin must pass this healthcheck N consecutive times. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Object description. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.expectedBody">expectedBody</a></code> | <code>java.lang.String</code> | A case-insensitive sub-string to look for in the response body. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.expectedCodes">expectedCodes</a></code> | <code>java.lang.String</code> | The expected HTTP response code or code range of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.followRedirects">followRedirects</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | The HTTP request headers to send in the health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.interval">interval</a></code> | <code>java.lang.Number</code> | The interval between each health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.method">method</a></code> | <code>java.lang.String</code> | The method to use for the health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The endpoint path you want to conduct a health check against. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The port number to connect to for the health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.probeZone">probeZone</a></code> | <code>java.lang.String</code> | Assign this monitor to emulate the specified zone while probing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.retries">retries</a></code> | <code>java.lang.Number</code> | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | The timeout (in seconds) before marking the health check as failed. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The protocol to use for the health check. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#account_id LoadBalancerMonitor#account_id}

---

##### `allowInsecure`<sup>Optional</sup> <a name="allowInsecure" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.allowInsecure"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not validate the certificate when monitor use HTTPS.

This parameter is currently only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#allow_insecure LoadBalancerMonitor#allow_insecure}

---

##### `consecutiveDown`<sup>Optional</sup> <a name="consecutiveDown" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.consecutiveDown"></a>

- *Type:* java.lang.Number

To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#consecutive_down LoadBalancerMonitor#consecutive_down}

---

##### `consecutiveUp`<sup>Optional</sup> <a name="consecutiveUp" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.consecutiveUp"></a>

- *Type:* java.lang.Number

To be marked healthy the monitored origin must pass this healthcheck N consecutive times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#consecutive_up LoadBalancerMonitor#consecutive_up}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Object description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#description LoadBalancerMonitor#description}

---

##### `expectedBody`<sup>Optional</sup> <a name="expectedBody" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.expectedBody"></a>

- *Type:* java.lang.String

A case-insensitive sub-string to look for in the response body.

If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#expected_body LoadBalancerMonitor#expected_body}

---

##### `expectedCodes`<sup>Optional</sup> <a name="expectedCodes" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.expectedCodes"></a>

- *Type:* java.lang.String

The expected HTTP response code or code range of the health check.

This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#expected_codes LoadBalancerMonitor#expected_codes}

---

##### `followRedirects`<sup>Optional</sup> <a name="followRedirects" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.followRedirects"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#follow_redirects LoadBalancerMonitor#follow_redirects}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.header"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

The HTTP request headers to send in the health check.

It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#header LoadBalancerMonitor#header}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.interval"></a>

- *Type:* java.lang.Number

The interval between each health check.

Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#interval LoadBalancerMonitor#interval}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.method"></a>

- *Type:* java.lang.String

The method to use for the health check.

This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#method LoadBalancerMonitor#method}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The endpoint path you want to conduct a health check against.

This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#path LoadBalancerMonitor#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The port number to connect to for the health check.

Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default 80, HTTPS: default 443).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#port LoadBalancerMonitor#port}

---

##### `probeZone`<sup>Optional</sup> <a name="probeZone" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.probeZone"></a>

- *Type:* java.lang.String

Assign this monitor to emulate the specified zone while probing.

This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#probe_zone LoadBalancerMonitor#probe_zone}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.retries"></a>

- *Type:* java.lang.Number

The number of retries to attempt in case of a timeout before marking the origin as unhealthy.

Retries are attempted immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#retries LoadBalancerMonitor#retries}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

The timeout (in seconds) before marking the health check as failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#timeout LoadBalancerMonitor#timeout}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The protocol to use for the health check.

Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.
Available values: "http", "https", "tcp", "udp_icmp", "icmp_ping", "smtp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#type LoadBalancerMonitor#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetAllowInsecure">resetAllowInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetConsecutiveDown">resetConsecutiveDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetConsecutiveUp">resetConsecutiveUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetExpectedBody">resetExpectedBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetExpectedCodes">resetExpectedCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetFollowRedirects">resetFollowRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetProbeZone">resetProbeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowInsecure` <a name="resetAllowInsecure" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetAllowInsecure"></a>

```java
public void resetAllowInsecure()
```

##### `resetConsecutiveDown` <a name="resetConsecutiveDown" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetConsecutiveDown"></a>

```java
public void resetConsecutiveDown()
```

##### `resetConsecutiveUp` <a name="resetConsecutiveUp" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetConsecutiveUp"></a>

```java
public void resetConsecutiveUp()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpectedBody` <a name="resetExpectedBody" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetExpectedBody"></a>

```java
public void resetExpectedBody()
```

##### `resetExpectedCodes` <a name="resetExpectedCodes" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetExpectedCodes"></a>

```java
public void resetExpectedCodes()
```

##### `resetFollowRedirects` <a name="resetFollowRedirects" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetFollowRedirects"></a>

```java
public void resetFollowRedirects()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetPort"></a>

```java
public void resetPort()
```

##### `resetProbeZone` <a name="resetProbeZone" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetProbeZone"></a>

```java
public void resetProbeZone()
```

##### `resetRetries` <a name="resetRetries" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetRetries"></a>

```java
public void resetRetries()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer_monitor.LoadBalancerMonitor;

LoadBalancerMonitor.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer_monitor.LoadBalancerMonitor;

LoadBalancerMonitor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer_monitor.LoadBalancerMonitor;

LoadBalancerMonitor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer_monitor.LoadBalancerMonitor;

LoadBalancerMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LoadBalancerMonitor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LoadBalancerMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LoadBalancerMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LoadBalancerMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.allowInsecureInput">allowInsecureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveDownInput">consecutiveDownInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveUpInput">consecutiveUpInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedBodyInput">expectedBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedCodesInput">expectedCodesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.followRedirectsInput">followRedirectsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.probeZoneInput">probeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.allowInsecure">allowInsecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveDown">consecutiveDown</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveUp">consecutiveUp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedBody">expectedBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedCodes">expectedCodes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.followRedirects">followRedirects</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.probeZone">probeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `allowInsecureInput`<sup>Optional</sup> <a name="allowInsecureInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.allowInsecureInput"></a>

```java
public java.lang.Object getAllowInsecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `consecutiveDownInput`<sup>Optional</sup> <a name="consecutiveDownInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveDownInput"></a>

```java
public java.lang.Number getConsecutiveDownInput();
```

- *Type:* java.lang.Number

---

##### `consecutiveUpInput`<sup>Optional</sup> <a name="consecutiveUpInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveUpInput"></a>

```java
public java.lang.Number getConsecutiveUpInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expectedBodyInput`<sup>Optional</sup> <a name="expectedBodyInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedBodyInput"></a>

```java
public java.lang.String getExpectedBodyInput();
```

- *Type:* java.lang.String

---

##### `expectedCodesInput`<sup>Optional</sup> <a name="expectedCodesInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedCodesInput"></a>

```java
public java.lang.String getExpectedCodesInput();
```

- *Type:* java.lang.String

---

##### `followRedirectsInput`<sup>Optional</sup> <a name="followRedirectsInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.followRedirectsInput"></a>

```java
public java.lang.Object getFollowRedirectsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.headerInput"></a>

```java
public java.lang.Object getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `probeZoneInput`<sup>Optional</sup> <a name="probeZoneInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.probeZoneInput"></a>

```java
public java.lang.String getProbeZoneInput();
```

- *Type:* java.lang.String

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `allowInsecure`<sup>Required</sup> <a name="allowInsecure" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.allowInsecure"></a>

```java
public java.lang.Object getAllowInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `consecutiveDown`<sup>Required</sup> <a name="consecutiveDown" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveDown"></a>

```java
public java.lang.Number getConsecutiveDown();
```

- *Type:* java.lang.Number

---

##### `consecutiveUp`<sup>Required</sup> <a name="consecutiveUp" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.consecutiveUp"></a>

```java
public java.lang.Number getConsecutiveUp();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expectedBody`<sup>Required</sup> <a name="expectedBody" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedBody"></a>

```java
public java.lang.String getExpectedBody();
```

- *Type:* java.lang.String

---

##### `expectedCodes`<sup>Required</sup> <a name="expectedCodes" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.expectedCodes"></a>

```java
public java.lang.String getExpectedCodes();
```

- *Type:* java.lang.String

---

##### `followRedirects`<sup>Required</sup> <a name="followRedirects" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.followRedirects"></a>

```java
public java.lang.Object getFollowRedirects();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `probeZone`<sup>Required</sup> <a name="probeZone" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.probeZone"></a>

```java
public java.lang.String getProbeZone();
```

- *Type:* java.lang.String

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerMonitorConfig <a name="LoadBalancerMonitorConfig" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.load_balancer_monitor.LoadBalancerMonitorConfig;

LoadBalancerMonitorConfig.builder()
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
    .accountId(java.lang.String)
//  .allowInsecure(java.lang.Boolean)
//  .allowInsecure(IResolvable)
//  .consecutiveDown(java.lang.Number)
//  .consecutiveUp(java.lang.Number)
//  .description(java.lang.String)
//  .expectedBody(java.lang.String)
//  .expectedCodes(java.lang.String)
//  .followRedirects(java.lang.Boolean)
//  .followRedirects(IResolvable)
//  .header(IResolvable)
//  .header(java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .interval(java.lang.Number)
//  .method(java.lang.String)
//  .path(java.lang.String)
//  .port(java.lang.Number)
//  .probeZone(java.lang.String)
//  .retries(java.lang.Number)
//  .timeout(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.allowInsecure">allowInsecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not validate the certificate when monitor use HTTPS. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.consecutiveDown">consecutiveDown</a></code> | <code>java.lang.Number</code> | To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.consecutiveUp">consecutiveUp</a></code> | <code>java.lang.Number</code> | To be marked healthy the monitored origin must pass this healthcheck N consecutive times. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.description">description</a></code> | <code>java.lang.String</code> | Object description. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.expectedBody">expectedBody</a></code> | <code>java.lang.String</code> | A case-insensitive sub-string to look for in the response body. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.expectedCodes">expectedCodes</a></code> | <code>java.lang.String</code> | The expected HTTP response code or code range of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.followRedirects">followRedirects</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | The HTTP request headers to send in the health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.interval">interval</a></code> | <code>java.lang.Number</code> | The interval between each health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.method">method</a></code> | <code>java.lang.String</code> | The method to use for the health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.path">path</a></code> | <code>java.lang.String</code> | The endpoint path you want to conduct a health check against. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The port number to connect to for the health check. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.probeZone">probeZone</a></code> | <code>java.lang.String</code> | Assign this monitor to emulate the specified zone while probing. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.retries">retries</a></code> | <code>java.lang.Number</code> | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | The timeout (in seconds) before marking the health check as failed. |
| <code><a href="#@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.type">type</a></code> | <code>java.lang.String</code> | The protocol to use for the health check. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#account_id LoadBalancerMonitor#account_id}

---

##### `allowInsecure`<sup>Optional</sup> <a name="allowInsecure" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.allowInsecure"></a>

```java
public java.lang.Object getAllowInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not validate the certificate when monitor use HTTPS.

This parameter is currently only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#allow_insecure LoadBalancerMonitor#allow_insecure}

---

##### `consecutiveDown`<sup>Optional</sup> <a name="consecutiveDown" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.consecutiveDown"></a>

```java
public java.lang.Number getConsecutiveDown();
```

- *Type:* java.lang.Number

To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#consecutive_down LoadBalancerMonitor#consecutive_down}

---

##### `consecutiveUp`<sup>Optional</sup> <a name="consecutiveUp" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.consecutiveUp"></a>

```java
public java.lang.Number getConsecutiveUp();
```

- *Type:* java.lang.Number

To be marked healthy the monitored origin must pass this healthcheck N consecutive times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#consecutive_up LoadBalancerMonitor#consecutive_up}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Object description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#description LoadBalancerMonitor#description}

---

##### `expectedBody`<sup>Optional</sup> <a name="expectedBody" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.expectedBody"></a>

```java
public java.lang.String getExpectedBody();
```

- *Type:* java.lang.String

A case-insensitive sub-string to look for in the response body.

If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#expected_body LoadBalancerMonitor#expected_body}

---

##### `expectedCodes`<sup>Optional</sup> <a name="expectedCodes" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.expectedCodes"></a>

```java
public java.lang.String getExpectedCodes();
```

- *Type:* java.lang.String

The expected HTTP response code or code range of the health check.

This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#expected_codes LoadBalancerMonitor#expected_codes}

---

##### `followRedirects`<sup>Optional</sup> <a name="followRedirects" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.followRedirects"></a>

```java
public java.lang.Object getFollowRedirects();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#follow_redirects LoadBalancerMonitor#follow_redirects}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

The HTTP request headers to send in the health check.

It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#header LoadBalancerMonitor#header}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

The interval between each health check.

Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#interval LoadBalancerMonitor#interval}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

The method to use for the health check.

This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#method LoadBalancerMonitor#method}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The endpoint path you want to conduct a health check against.

This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#path LoadBalancerMonitor#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number to connect to for the health check.

Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default 80, HTTPS: default 443).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#port LoadBalancerMonitor#port}

---

##### `probeZone`<sup>Optional</sup> <a name="probeZone" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.probeZone"></a>

```java
public java.lang.String getProbeZone();
```

- *Type:* java.lang.String

Assign this monitor to emulate the specified zone while probing.

This parameter is only valid for HTTP and HTTPS monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#probe_zone LoadBalancerMonitor#probe_zone}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

The number of retries to attempt in case of a timeout before marking the origin as unhealthy.

Retries are attempted immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#retries LoadBalancerMonitor#retries}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

The timeout (in seconds) before marking the health check as failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#timeout LoadBalancerMonitor#timeout}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.loadBalancerMonitor.LoadBalancerMonitorConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The protocol to use for the health check.

Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.
Available values: "http", "https", "tcp", "udp_icmp", "icmp_ping", "smtp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/load_balancer_monitor#type LoadBalancerMonitor#type}

---



