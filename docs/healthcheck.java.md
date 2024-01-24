# `healthcheck` Submodule <a name="`healthcheck` Submodule" id="@cdktf/provider-cloudflare.healthcheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Healthcheck <a name="Healthcheck" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck cloudflare_healthcheck}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.healthcheck.Healthcheck;

Healthcheck.Builder.create(Construct scope, java.lang.String id)
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
    .address(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
    .zoneId(java.lang.String)
//  .allowInsecure(java.lang.Boolean)
//  .allowInsecure(IResolvable)
//  .checkRegions(java.util.List<java.lang.String>)
//  .consecutiveFails(java.lang.Number)
//  .consecutiveSuccesses(java.lang.Number)
//  .description(java.lang.String)
//  .expectedBody(java.lang.String)
//  .expectedCodes(java.util.List<java.lang.String>)
//  .followRedirects(java.lang.Boolean)
//  .followRedirects(IResolvable)
//  .header(IResolvable)
//  .header(java.util.List<HealthcheckHeader>)
//  .id(java.lang.String)
//  .interval(java.lang.Number)
//  .method(java.lang.String)
//  .path(java.lang.String)
//  .port(java.lang.Number)
//  .retries(java.lang.Number)
//  .suspended(java.lang.Boolean)
//  .suspended(IResolvable)
//  .timeout(java.lang.Number)
//  .timeouts(HealthcheckTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.address">address</a></code> | <code>java.lang.String</code> | The hostname or IP address of the origin server to run health checks on. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A short name to identify the health check. Only alphanumeric characters, hyphens, and underscores are allowed. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The protocol to use for the health check. Available values: `TCP`, `HTTP`, `HTTPS`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.allowInsecure">allowInsecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not validate the certificate when the health check uses HTTPS. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.checkRegions">checkRegions</a></code> | <code>java.util.List<java.lang.String></code> | A list of regions from which to run health checks. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.consecutiveFails">consecutiveFails</a></code> | <code>java.lang.Number</code> | The number of consecutive fails required from a health check before changing the health to unhealthy. Defaults to `1`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.consecutiveSuccesses">consecutiveSuccesses</a></code> | <code>java.lang.Number</code> | The number of consecutive successes required from a health check before changing the health to healthy. Defaults to `1`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.expectedBody">expectedBody</a></code> | <code>java.lang.String</code> | A case-insensitive sub-string to look for in the response body. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.expectedCodes">expectedCodes</a></code> | <code>java.util.List<java.lang.String></code> | The expected HTTP response codes (e.g. '200') or code ranges (e.g. '2xx' for all codes starting with 2) of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.followRedirects">followRedirects</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Follow redirects if the origin returns a 3xx status code. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader">HealthcheckHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#id Healthcheck#id}. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.interval">interval</a></code> | <code>java.lang.Number</code> | The interval between each health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.method">method</a></code> | <code>java.lang.String</code> | The HTTP method to use for the health check. Available values: `connection_established`, `GET`, `HEAD`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The endpoint path to health check against. Defaults to `/`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Port number to connect to for the health check. Defaults to `80`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.retries">retries</a></code> | <code>java.lang.Number</code> | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If suspended, no health checks are sent to the origin. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | The timeout (in seconds) before marking the health check as failed. Defaults to `5`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts">HealthcheckTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.address"></a>

- *Type:* java.lang.String

The hostname or IP address of the origin server to run health checks on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#address Healthcheck#address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A short name to identify the health check. Only alphanumeric characters, hyphens, and underscores are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#name Healthcheck#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The protocol to use for the health check. Available values: `TCP`, `HTTP`, `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#type Healthcheck#type}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#zone_id Healthcheck#zone_id}

---

##### `allowInsecure`<sup>Optional</sup> <a name="allowInsecure" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.allowInsecure"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not validate the certificate when the health check uses HTTPS. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#allow_insecure Healthcheck#allow_insecure}

---

##### `checkRegions`<sup>Optional</sup> <a name="checkRegions" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.checkRegions"></a>

- *Type:* java.util.List<java.lang.String>

A list of regions from which to run health checks.

If not set, Cloudflare will pick a default region. Available values: `WNAM`, `ENAM`, `WEU`, `EEU`, `NSAM`, `SSAM`, `OC`, `ME`, `NAF`, `SAF`, `IN`, `SEAS`, `NEAS`, `ALL_REGIONS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#check_regions Healthcheck#check_regions}

---

##### `consecutiveFails`<sup>Optional</sup> <a name="consecutiveFails" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.consecutiveFails"></a>

- *Type:* java.lang.Number

The number of consecutive fails required from a health check before changing the health to unhealthy. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#consecutive_fails Healthcheck#consecutive_fails}

---

##### `consecutiveSuccesses`<sup>Optional</sup> <a name="consecutiveSuccesses" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.consecutiveSuccesses"></a>

- *Type:* java.lang.Number

The number of consecutive successes required from a health check before changing the health to healthy. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#consecutive_successes Healthcheck#consecutive_successes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#description Healthcheck#description}

---

##### `expectedBody`<sup>Optional</sup> <a name="expectedBody" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.expectedBody"></a>

- *Type:* java.lang.String

A case-insensitive sub-string to look for in the response body.

If this string is not found the origin will be marked as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#expected_body Healthcheck#expected_body}

---

##### `expectedCodes`<sup>Optional</sup> <a name="expectedCodes" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.expectedCodes"></a>

- *Type:* java.util.List<java.lang.String>

The expected HTTP response codes (e.g. '200') or code ranges (e.g. '2xx' for all codes starting with 2) of the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#expected_codes Healthcheck#expected_codes}

---

##### `followRedirects`<sup>Optional</sup> <a name="followRedirects" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.followRedirects"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Follow redirects if the origin returns a 3xx status code. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#follow_redirects Healthcheck#follow_redirects}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.header"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader">HealthcheckHeader</a>>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#header Healthcheck#header}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#id Healthcheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.interval"></a>

- *Type:* java.lang.Number

The interval between each health check.

Shorter intervals may give quicker notifications if the origin status changes, but will increase the load on the origin as we check from multiple locations. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#interval Healthcheck#interval}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.method"></a>

- *Type:* java.lang.String

The HTTP method to use for the health check. Available values: `connection_established`, `GET`, `HEAD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#method Healthcheck#method}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The endpoint path to health check against. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#path Healthcheck#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Port number to connect to for the health check. Defaults to `80`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#port Healthcheck#port}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.retries"></a>

- *Type:* java.lang.Number

The number of retries to attempt in case of a timeout before marking the origin as unhealthy.

Retries are attempted immediately. Defaults to `2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#retries Healthcheck#retries}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.suspended"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If suspended, no health checks are sent to the origin. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#suspended Healthcheck#suspended}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

The timeout (in seconds) before marking the health check as failed. Defaults to `5`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#timeout Healthcheck#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts">HealthcheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#timeouts Healthcheck#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetAllowInsecure">resetAllowInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetCheckRegions">resetCheckRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveFails">resetConsecutiveFails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveSuccesses">resetConsecutiveSuccesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetExpectedBody">resetExpectedBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetExpectedCodes">resetExpectedCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetFollowRedirects">resetFollowRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetSuspended">resetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHeader` <a name="putHeader" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHeader"></a>

```java
public void putHeader(IResolvable OR java.util.List<HealthcheckHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHeader.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader">HealthcheckHeader</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putTimeouts"></a>

```java
public void putTimeouts(HealthcheckTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts">HealthcheckTimeouts</a>

---

##### `resetAllowInsecure` <a name="resetAllowInsecure" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetAllowInsecure"></a>

```java
public void resetAllowInsecure()
```

##### `resetCheckRegions` <a name="resetCheckRegions" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetCheckRegions"></a>

```java
public void resetCheckRegions()
```

##### `resetConsecutiveFails` <a name="resetConsecutiveFails" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveFails"></a>

```java
public void resetConsecutiveFails()
```

##### `resetConsecutiveSuccesses` <a name="resetConsecutiveSuccesses" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveSuccesses"></a>

```java
public void resetConsecutiveSuccesses()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpectedBody` <a name="resetExpectedBody" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetExpectedBody"></a>

```java
public void resetExpectedBody()
```

##### `resetExpectedCodes` <a name="resetExpectedCodes" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetExpectedCodes"></a>

```java
public void resetExpectedCodes()
```

##### `resetFollowRedirects` <a name="resetFollowRedirects" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetFollowRedirects"></a>

```java
public void resetFollowRedirects()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetId"></a>

```java
public void resetId()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetPort"></a>

```java
public void resetPort()
```

##### `resetRetries` <a name="resetRetries" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetRetries"></a>

```java
public void resetRetries()
```

##### `resetSuspended` <a name="resetSuspended" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetSuspended"></a>

```java
public void resetSuspended()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Healthcheck resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.healthcheck.Healthcheck;

Healthcheck.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.healthcheck.Healthcheck;

Healthcheck.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.healthcheck.Healthcheck;

Healthcheck.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.healthcheck.Healthcheck;

Healthcheck.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Healthcheck.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Healthcheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Healthcheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Healthcheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Healthcheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.header">header</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList">HealthcheckHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference">HealthcheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.allowInsecureInput">allowInsecureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegionsInput">checkRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFailsInput">consecutiveFailsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccessesInput">consecutiveSuccessesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.expectedBodyInput">expectedBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.expectedCodesInput">expectedCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.followRedirectsInput">followRedirectsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader">HealthcheckHeader</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.suspendedInput">suspendedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts">HealthcheckTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.allowInsecure">allowInsecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegions">checkRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFails">consecutiveFails</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccesses">consecutiveSuccesses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.expectedBody">expectedBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.expectedCodes">expectedCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.followRedirects">followRedirects</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.retries">retries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.header"></a>

```java
public HealthcheckHeaderList getHeader();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList">HealthcheckHeaderList</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeouts"></a>

```java
public HealthcheckTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference">HealthcheckTimeoutsOutputReference</a>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `allowInsecureInput`<sup>Optional</sup> <a name="allowInsecureInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.allowInsecureInput"></a>

```java
public java.lang.Object getAllowInsecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `checkRegionsInput`<sup>Optional</sup> <a name="checkRegionsInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegionsInput"></a>

```java
public java.util.List<java.lang.String> getCheckRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `consecutiveFailsInput`<sup>Optional</sup> <a name="consecutiveFailsInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFailsInput"></a>

```java
public java.lang.Number getConsecutiveFailsInput();
```

- *Type:* java.lang.Number

---

##### `consecutiveSuccessesInput`<sup>Optional</sup> <a name="consecutiveSuccessesInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccessesInput"></a>

```java
public java.lang.Number getConsecutiveSuccessesInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expectedBodyInput`<sup>Optional</sup> <a name="expectedBodyInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.expectedBodyInput"></a>

```java
public java.lang.String getExpectedBodyInput();
```

- *Type:* java.lang.String

---

##### `expectedCodesInput`<sup>Optional</sup> <a name="expectedCodesInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.expectedCodesInput"></a>

```java
public java.util.List<java.lang.String> getExpectedCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `followRedirectsInput`<sup>Optional</sup> <a name="followRedirectsInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.followRedirectsInput"></a>

```java
public java.lang.Object getFollowRedirectsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.headerInput"></a>

```java
public java.lang.Object getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader">HealthcheckHeader</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.retriesInput"></a>

```java
public java.lang.Number getRetriesInput();
```

- *Type:* java.lang.Number

---

##### `suspendedInput`<sup>Optional</sup> <a name="suspendedInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.suspendedInput"></a>

```java
public java.lang.Object getSuspendedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts">HealthcheckTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `allowInsecure`<sup>Required</sup> <a name="allowInsecure" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.allowInsecure"></a>

```java
public java.lang.Object getAllowInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `checkRegions`<sup>Required</sup> <a name="checkRegions" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegions"></a>

```java
public java.util.List<java.lang.String> getCheckRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `consecutiveFails`<sup>Required</sup> <a name="consecutiveFails" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFails"></a>

```java
public java.lang.Number getConsecutiveFails();
```

- *Type:* java.lang.Number

---

##### `consecutiveSuccesses`<sup>Required</sup> <a name="consecutiveSuccesses" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccesses"></a>

```java
public java.lang.Number getConsecutiveSuccesses();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expectedBody`<sup>Required</sup> <a name="expectedBody" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.expectedBody"></a>

```java
public java.lang.String getExpectedBody();
```

- *Type:* java.lang.String

---

##### `expectedCodes`<sup>Required</sup> <a name="expectedCodes" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.expectedCodes"></a>

```java
public java.util.List<java.lang.String> getExpectedCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `followRedirects`<sup>Required</sup> <a name="followRedirects" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.followRedirects"></a>

```java
public java.lang.Object getFollowRedirects();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.suspended"></a>

```java
public java.lang.Object getSuspended();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcheckConfig <a name="HealthcheckConfig" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.healthcheck.HealthcheckConfig;

HealthcheckConfig.builder()
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
    .address(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
    .zoneId(java.lang.String)
//  .allowInsecure(java.lang.Boolean)
//  .allowInsecure(IResolvable)
//  .checkRegions(java.util.List<java.lang.String>)
//  .consecutiveFails(java.lang.Number)
//  .consecutiveSuccesses(java.lang.Number)
//  .description(java.lang.String)
//  .expectedBody(java.lang.String)
//  .expectedCodes(java.util.List<java.lang.String>)
//  .followRedirects(java.lang.Boolean)
//  .followRedirects(IResolvable)
//  .header(IResolvable)
//  .header(java.util.List<HealthcheckHeader>)
//  .id(java.lang.String)
//  .interval(java.lang.Number)
//  .method(java.lang.String)
//  .path(java.lang.String)
//  .port(java.lang.Number)
//  .retries(java.lang.Number)
//  .suspended(java.lang.Boolean)
//  .suspended(IResolvable)
//  .timeout(java.lang.Number)
//  .timeouts(HealthcheckTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.address">address</a></code> | <code>java.lang.String</code> | The hostname or IP address of the origin server to run health checks on. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.name">name</a></code> | <code>java.lang.String</code> | A short name to identify the health check. Only alphanumeric characters, hyphens, and underscores are allowed. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.type">type</a></code> | <code>java.lang.String</code> | The protocol to use for the health check. Available values: `TCP`, `HTTP`, `HTTPS`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.allowInsecure">allowInsecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not validate the certificate when the health check uses HTTPS. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.checkRegions">checkRegions</a></code> | <code>java.util.List<java.lang.String></code> | A list of regions from which to run health checks. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveFails">consecutiveFails</a></code> | <code>java.lang.Number</code> | The number of consecutive fails required from a health check before changing the health to unhealthy. Defaults to `1`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveSuccesses">consecutiveSuccesses</a></code> | <code>java.lang.Number</code> | The number of consecutive successes required from a health check before changing the health to healthy. Defaults to `1`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.expectedBody">expectedBody</a></code> | <code>java.lang.String</code> | A case-insensitive sub-string to look for in the response body. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.expectedCodes">expectedCodes</a></code> | <code>java.util.List<java.lang.String></code> | The expected HTTP response codes (e.g. '200') or code ranges (e.g. '2xx' for all codes starting with 2) of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.followRedirects">followRedirects</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Follow redirects if the origin returns a 3xx status code. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader">HealthcheckHeader</a>></code> | header block. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#id Healthcheck#id}. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.interval">interval</a></code> | <code>java.lang.Number</code> | The interval between each health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.method">method</a></code> | <code>java.lang.String</code> | The HTTP method to use for the health check. Available values: `connection_established`, `GET`, `HEAD`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.path">path</a></code> | <code>java.lang.String</code> | The endpoint path to health check against. Defaults to `/`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Port number to connect to for the health check. Defaults to `80`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.retries">retries</a></code> | <code>java.lang.Number</code> | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If suspended, no health checks are sent to the origin. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | The timeout (in seconds) before marking the health check as failed. Defaults to `5`. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts">HealthcheckTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The hostname or IP address of the origin server to run health checks on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#address Healthcheck#address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A short name to identify the health check. Only alphanumeric characters, hyphens, and underscores are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#name Healthcheck#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The protocol to use for the health check. Available values: `TCP`, `HTTP`, `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#type Healthcheck#type}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#zone_id Healthcheck#zone_id}

---

##### `allowInsecure`<sup>Optional</sup> <a name="allowInsecure" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.allowInsecure"></a>

```java
public java.lang.Object getAllowInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not validate the certificate when the health check uses HTTPS. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#allow_insecure Healthcheck#allow_insecure}

---

##### `checkRegions`<sup>Optional</sup> <a name="checkRegions" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.checkRegions"></a>

```java
public java.util.List<java.lang.String> getCheckRegions();
```

- *Type:* java.util.List<java.lang.String>

A list of regions from which to run health checks.

If not set, Cloudflare will pick a default region. Available values: `WNAM`, `ENAM`, `WEU`, `EEU`, `NSAM`, `SSAM`, `OC`, `ME`, `NAF`, `SAF`, `IN`, `SEAS`, `NEAS`, `ALL_REGIONS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#check_regions Healthcheck#check_regions}

---

##### `consecutiveFails`<sup>Optional</sup> <a name="consecutiveFails" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveFails"></a>

```java
public java.lang.Number getConsecutiveFails();
```

- *Type:* java.lang.Number

The number of consecutive fails required from a health check before changing the health to unhealthy. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#consecutive_fails Healthcheck#consecutive_fails}

---

##### `consecutiveSuccesses`<sup>Optional</sup> <a name="consecutiveSuccesses" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveSuccesses"></a>

```java
public java.lang.Number getConsecutiveSuccesses();
```

- *Type:* java.lang.Number

The number of consecutive successes required from a health check before changing the health to healthy. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#consecutive_successes Healthcheck#consecutive_successes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#description Healthcheck#description}

---

##### `expectedBody`<sup>Optional</sup> <a name="expectedBody" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.expectedBody"></a>

```java
public java.lang.String getExpectedBody();
```

- *Type:* java.lang.String

A case-insensitive sub-string to look for in the response body.

If this string is not found the origin will be marked as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#expected_body Healthcheck#expected_body}

---

##### `expectedCodes`<sup>Optional</sup> <a name="expectedCodes" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.expectedCodes"></a>

```java
public java.util.List<java.lang.String> getExpectedCodes();
```

- *Type:* java.util.List<java.lang.String>

The expected HTTP response codes (e.g. '200') or code ranges (e.g. '2xx' for all codes starting with 2) of the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#expected_codes Healthcheck#expected_codes}

---

##### `followRedirects`<sup>Optional</sup> <a name="followRedirects" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.followRedirects"></a>

```java
public java.lang.Object getFollowRedirects();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Follow redirects if the origin returns a 3xx status code. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#follow_redirects Healthcheck#follow_redirects}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader">HealthcheckHeader</a>>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#header Healthcheck#header}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#id Healthcheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

The interval between each health check.

Shorter intervals may give quicker notifications if the origin status changes, but will increase the load on the origin as we check from multiple locations. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#interval Healthcheck#interval}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

The HTTP method to use for the health check. Available values: `connection_established`, `GET`, `HEAD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#method Healthcheck#method}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The endpoint path to health check against. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#path Healthcheck#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port number to connect to for the health check. Defaults to `80`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#port Healthcheck#port}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

The number of retries to attempt in case of a timeout before marking the origin as unhealthy.

Retries are attempted immediately. Defaults to `2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#retries Healthcheck#retries}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.suspended"></a>

```java
public java.lang.Object getSuspended();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If suspended, no health checks are sent to the origin. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#suspended Healthcheck#suspended}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

The timeout (in seconds) before marking the health check as failed. Defaults to `5`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#timeout Healthcheck#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.timeouts"></a>

```java
public HealthcheckTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts">HealthcheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#timeouts Healthcheck#timeouts}

---

### HealthcheckHeader <a name="HealthcheckHeader" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.healthcheck.HealthcheckHeader;

HealthcheckHeader.builder()
    .header(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader.property.header">header</a></code> | <code>java.lang.String</code> | The header name. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | A list of string values for the header. |

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader.property.header"></a>

```java
public java.lang.String getHeader();
```

- *Type:* java.lang.String

The header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#header Healthcheck#header}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

A list of string values for the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#values Healthcheck#values}

---

### HealthcheckTimeouts <a name="HealthcheckTimeouts" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.healthcheck.HealthcheckTimeouts;

HealthcheckTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#create Healthcheck#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.23.0/docs/resources/healthcheck#create Healthcheck#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcheckHeaderList <a name="HealthcheckHeaderList" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.healthcheck.HealthcheckHeaderList;

new HealthcheckHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.get"></a>

```java
public HealthcheckHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader">HealthcheckHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader">HealthcheckHeader</a>>

---


### HealthcheckHeaderOutputReference <a name="HealthcheckHeaderOutputReference" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.healthcheck.HealthcheckHeaderOutputReference;

new HealthcheckHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.headerInput">headerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.header">header</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader">HealthcheckHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.headerInput"></a>

```java
public java.lang.String getHeaderInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.header"></a>

```java
public java.lang.String getHeader();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHeaderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHeader">HealthcheckHeader</a>

---


### HealthcheckTimeoutsOutputReference <a name="HealthcheckTimeoutsOutputReference" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.healthcheck.HealthcheckTimeoutsOutputReference;

new HealthcheckTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts">HealthcheckTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTimeouts">HealthcheckTimeouts</a>

---



