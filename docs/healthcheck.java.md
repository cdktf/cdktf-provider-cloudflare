# `healthcheck` Submodule <a name="`healthcheck` Submodule" id="@cdktf/provider-cloudflare.healthcheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Healthcheck <a name="Healthcheck" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck cloudflare_healthcheck}.

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
    .zoneId(java.lang.String)
//  .checkRegions(java.util.List<java.lang.String>)
//  .consecutiveFails(java.lang.Number)
//  .consecutiveSuccesses(java.lang.Number)
//  .description(java.lang.String)
//  .httpConfig(HealthcheckHttpConfig)
//  .interval(java.lang.Number)
//  .retries(java.lang.Number)
//  .suspended(java.lang.Boolean)
//  .suspended(IResolvable)
//  .tcpConfig(HealthcheckTcpConfig)
//  .timeout(java.lang.Number)
//  .type(java.lang.String)
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
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.checkRegions">checkRegions</a></code> | <code>java.util.List<java.lang.String></code> | A list of regions from which to run health checks. Null means Cloudflare will pick a default region. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.consecutiveFails">consecutiveFails</a></code> | <code>java.lang.Number</code> | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.consecutiveSuccesses">consecutiveSuccesses</a></code> | <code>java.lang.Number</code> | The number of consecutive successes required from a health check before changing the health to healthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.httpConfig">httpConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a></code> | Parameters specific to an HTTP or HTTPS health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.interval">interval</a></code> | <code>java.lang.Number</code> | The interval between each health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.retries">retries</a></code> | <code>java.lang.Number</code> | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If suspended, no health checks are sent to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.tcpConfig">tcpConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a></code> | Parameters specific to TCP health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | The timeout (in seconds) before marking the health check as failed. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'. |

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#address Healthcheck#address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#name Healthcheck#name}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#zone_id Healthcheck#zone_id}

---

##### `checkRegions`<sup>Optional</sup> <a name="checkRegions" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.checkRegions"></a>

- *Type:* java.util.List<java.lang.String>

A list of regions from which to run health checks. Null means Cloudflare will pick a default region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#check_regions Healthcheck#check_regions}

---

##### `consecutiveFails`<sup>Optional</sup> <a name="consecutiveFails" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.consecutiveFails"></a>

- *Type:* java.lang.Number

The number of consecutive fails required from a health check before changing the health to unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#consecutive_fails Healthcheck#consecutive_fails}

---

##### `consecutiveSuccesses`<sup>Optional</sup> <a name="consecutiveSuccesses" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.consecutiveSuccesses"></a>

- *Type:* java.lang.Number

The number of consecutive successes required from a health check before changing the health to healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#consecutive_successes Healthcheck#consecutive_successes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#description Healthcheck#description}

---

##### `httpConfig`<sup>Optional</sup> <a name="httpConfig" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.httpConfig"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a>

Parameters specific to an HTTP or HTTPS health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#http_config Healthcheck#http_config}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.interval"></a>

- *Type:* java.lang.Number

The interval between each health check.

Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#interval Healthcheck#interval}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.retries"></a>

- *Type:* java.lang.Number

The number of retries to attempt in case of a timeout before marking the origin as unhealthy.

Retries are attempted immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#retries Healthcheck#retries}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.suspended"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If suspended, no health checks are sent to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#suspended Healthcheck#suspended}

---

##### `tcpConfig`<sup>Optional</sup> <a name="tcpConfig" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.tcpConfig"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a>

Parameters specific to TCP health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#tcp_config Healthcheck#tcp_config}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

The timeout (in seconds) before marking the health check as failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#timeout Healthcheck#timeout}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#type Healthcheck#type}

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
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHttpConfig">putHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.putTcpConfig">putTcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetCheckRegions">resetCheckRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveFails">resetConsecutiveFails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetConsecutiveSuccesses">resetConsecutiveSuccesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetHttpConfig">resetHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetSuspended">resetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTcpConfig">resetTcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetType">resetType</a></code> | *No description.* |

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

##### `putHttpConfig` <a name="putHttpConfig" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHttpConfig"></a>

```java
public void putHttpConfig(HealthcheckHttpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putHttpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a>

---

##### `putTcpConfig` <a name="putTcpConfig" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putTcpConfig"></a>

```java
public void putTcpConfig(HealthcheckTcpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.putTcpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a>

---

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

##### `resetHttpConfig` <a name="resetHttpConfig" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetHttpConfig"></a>

```java
public void resetHttpConfig()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetRetries` <a name="resetRetries" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetRetries"></a>

```java
public void resetRetries()
```

##### `resetSuspended` <a name="resetSuspended" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetSuspended"></a>

```java
public void resetSuspended()
```

##### `resetTcpConfig` <a name="resetTcpConfig" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTcpConfig"></a>

```java
public void resetTcpConfig()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.resetType"></a>

```java
public void resetType()
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

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.failureReason">failureReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.httpConfig">httpConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference">HealthcheckHttpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tcpConfig">tcpConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference">HealthcheckTcpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegionsInput">checkRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFailsInput">consecutiveFailsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccessesInput">consecutiveSuccessesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.httpConfigInput">httpConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.retriesInput">retriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.suspendedInput">suspendedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tcpConfigInput">tcpConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.checkRegions">checkRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveFails">consecutiveFails</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.consecutiveSuccesses">consecutiveSuccesses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
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

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.failureReason"></a>

```java
public java.lang.String getFailureReason();
```

- *Type:* java.lang.String

---

##### `httpConfig`<sup>Required</sup> <a name="httpConfig" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.httpConfig"></a>

```java
public HealthcheckHttpConfigOutputReference getHttpConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference">HealthcheckHttpConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tcpConfig`<sup>Required</sup> <a name="tcpConfig" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tcpConfig"></a>

```java
public HealthcheckTcpConfigOutputReference getTcpConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference">HealthcheckTcpConfigOutputReference</a>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

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

##### `httpConfigInput`<sup>Optional</sup> <a name="httpConfigInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.httpConfigInput"></a>

```java
public java.lang.Object getHttpConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a>

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

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

##### `tcpConfigInput`<sup>Optional</sup> <a name="tcpConfigInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.tcpConfigInput"></a>

```java
public java.lang.Object getTcpConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

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

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.healthcheck.Healthcheck.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

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
    .zoneId(java.lang.String)
//  .checkRegions(java.util.List<java.lang.String>)
//  .consecutiveFails(java.lang.Number)
//  .consecutiveSuccesses(java.lang.Number)
//  .description(java.lang.String)
//  .httpConfig(HealthcheckHttpConfig)
//  .interval(java.lang.Number)
//  .retries(java.lang.Number)
//  .suspended(java.lang.Boolean)
//  .suspended(IResolvable)
//  .tcpConfig(HealthcheckTcpConfig)
//  .timeout(java.lang.Number)
//  .type(java.lang.String)
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
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.name">name</a></code> | <code>java.lang.String</code> | A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.checkRegions">checkRegions</a></code> | <code>java.util.List<java.lang.String></code> | A list of regions from which to run health checks. Null means Cloudflare will pick a default region. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveFails">consecutiveFails</a></code> | <code>java.lang.Number</code> | The number of consecutive fails required from a health check before changing the health to unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveSuccesses">consecutiveSuccesses</a></code> | <code>java.lang.Number</code> | The number of consecutive successes required from a health check before changing the health to healthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.httpConfig">httpConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a></code> | Parameters specific to an HTTP or HTTPS health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.interval">interval</a></code> | <code>java.lang.Number</code> | The interval between each health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.retries">retries</a></code> | <code>java.lang.Number</code> | The number of retries to attempt in case of a timeout before marking the origin as unhealthy. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.suspended">suspended</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If suspended, no health checks are sent to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.tcpConfig">tcpConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a></code> | Parameters specific to TCP health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | The timeout (in seconds) before marking the health check as failed. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.type">type</a></code> | <code>java.lang.String</code> | The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'. |

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#address Healthcheck#address}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#name Healthcheck#name}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#zone_id Healthcheck#zone_id}

---

##### `checkRegions`<sup>Optional</sup> <a name="checkRegions" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.checkRegions"></a>

```java
public java.util.List<java.lang.String> getCheckRegions();
```

- *Type:* java.util.List<java.lang.String>

A list of regions from which to run health checks. Null means Cloudflare will pick a default region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#check_regions Healthcheck#check_regions}

---

##### `consecutiveFails`<sup>Optional</sup> <a name="consecutiveFails" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveFails"></a>

```java
public java.lang.Number getConsecutiveFails();
```

- *Type:* java.lang.Number

The number of consecutive fails required from a health check before changing the health to unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#consecutive_fails Healthcheck#consecutive_fails}

---

##### `consecutiveSuccesses`<sup>Optional</sup> <a name="consecutiveSuccesses" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.consecutiveSuccesses"></a>

```java
public java.lang.Number getConsecutiveSuccesses();
```

- *Type:* java.lang.Number

The number of consecutive successes required from a health check before changing the health to healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#consecutive_successes Healthcheck#consecutive_successes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#description Healthcheck#description}

---

##### `httpConfig`<sup>Optional</sup> <a name="httpConfig" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.httpConfig"></a>

```java
public HealthcheckHttpConfig getHttpConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a>

Parameters specific to an HTTP or HTTPS health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#http_config Healthcheck#http_config}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

The interval between each health check.

Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#interval Healthcheck#interval}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

The number of retries to attempt in case of a timeout before marking the origin as unhealthy.

Retries are attempted immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#retries Healthcheck#retries}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.suspended"></a>

```java
public java.lang.Object getSuspended();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If suspended, no health checks are sent to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#suspended Healthcheck#suspended}

---

##### `tcpConfig`<sup>Optional</sup> <a name="tcpConfig" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.tcpConfig"></a>

```java
public HealthcheckTcpConfig getTcpConfig();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a>

Parameters specific to TCP health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#tcp_config Healthcheck#tcp_config}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

The timeout (in seconds) before marking the health check as failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#timeout Healthcheck#timeout}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#type Healthcheck#type}

---

### HealthcheckHttpConfig <a name="HealthcheckHttpConfig" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.healthcheck.HealthcheckHttpConfig;

HealthcheckHttpConfig.builder()
//  .allowInsecure(java.lang.Boolean)
//  .allowInsecure(IResolvable)
//  .expectedBody(java.lang.String)
//  .expectedCodes(java.util.List<java.lang.String>)
//  .followRedirects(java.lang.Boolean)
//  .followRedirects(IResolvable)
//  .header(IResolvable)
//  .header(java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .method(java.lang.String)
//  .path(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.allowInsecure">allowInsecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not validate the certificate when the health check uses HTTPS. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.expectedBody">expectedBody</a></code> | <code>java.lang.String</code> | A case-insensitive sub-string to look for in the response body. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.expectedCodes">expectedCodes</a></code> | <code>java.util.List<java.lang.String></code> | The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all codes starting with 2) of the health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.followRedirects">followRedirects</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Follow redirects if the origin returns a 3xx status code. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | The HTTP request headers to send in the health check. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.method">method</a></code> | <code>java.lang.String</code> | The HTTP method to use for the health check. Available values: "GET", "HEAD". |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.path">path</a></code> | <code>java.lang.String</code> | The endpoint path to health check against. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Port number to connect to for the health check. |

---

##### `allowInsecure`<sup>Optional</sup> <a name="allowInsecure" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.allowInsecure"></a>

```java
public java.lang.Object getAllowInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not validate the certificate when the health check uses HTTPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#allow_insecure Healthcheck#allow_insecure}

---

##### `expectedBody`<sup>Optional</sup> <a name="expectedBody" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.expectedBody"></a>

```java
public java.lang.String getExpectedBody();
```

- *Type:* java.lang.String

A case-insensitive sub-string to look for in the response body.

If this string is not found, the origin will be marked as unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#expected_body Healthcheck#expected_body}

---

##### `expectedCodes`<sup>Optional</sup> <a name="expectedCodes" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.expectedCodes"></a>

```java
public java.util.List<java.lang.String> getExpectedCodes();
```

- *Type:* java.util.List<java.lang.String>

The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all codes starting with 2) of the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#expected_codes Healthcheck#expected_codes}

---

##### `followRedirects`<sup>Optional</sup> <a name="followRedirects" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.followRedirects"></a>

```java
public java.lang.Object getFollowRedirects();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Follow redirects if the origin returns a 3xx status code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#follow_redirects Healthcheck#follow_redirects}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

The HTTP request headers to send in the health check.

It is recommended you set a Host header by default. The User-Agent header cannot be overridden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#header Healthcheck#header}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

The HTTP method to use for the health check. Available values: "GET", "HEAD".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#method Healthcheck#method}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The endpoint path to health check against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#path Healthcheck#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port number to connect to for the health check.

Defaults to 80 if type is HTTP or 443 if type is HTTPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#port Healthcheck#port}

---

### HealthcheckTcpConfig <a name="HealthcheckTcpConfig" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.healthcheck.HealthcheckTcpConfig;

HealthcheckTcpConfig.builder()
//  .method(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig.property.method">method</a></code> | <code>java.lang.String</code> | The TCP connection method to use for the health check. Available values: "connection_established". |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Port number to connect to for the health check. Defaults to 80. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

The TCP connection method to use for the health check. Available values: "connection_established".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#method Healthcheck#method}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port number to connect to for the health check. Defaults to 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/healthcheck#port Healthcheck#port}

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcheckHttpConfigOutputReference <a name="HealthcheckHttpConfigOutputReference" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.healthcheck.HealthcheckHttpConfigOutputReference;

new HealthcheckHttpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetAllowInsecure">resetAllowInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetExpectedBody">resetExpectedBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetExpectedCodes">resetExpectedCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetFollowRedirects">resetFollowRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowInsecure` <a name="resetAllowInsecure" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetAllowInsecure"></a>

```java
public void resetAllowInsecure()
```

##### `resetExpectedBody` <a name="resetExpectedBody" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetExpectedBody"></a>

```java
public void resetExpectedBody()
```

##### `resetExpectedCodes` <a name="resetExpectedCodes" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetExpectedCodes"></a>

```java
public void resetExpectedCodes()
```

##### `resetFollowRedirects` <a name="resetFollowRedirects" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetFollowRedirects"></a>

```java
public void resetFollowRedirects()
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetHeader"></a>

```java
public void resetHeader()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.allowInsecureInput">allowInsecureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedBodyInput">expectedBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedCodesInput">expectedCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.followRedirectsInput">followRedirectsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.headerInput">headerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.allowInsecure">allowInsecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedBody">expectedBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedCodes">expectedCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.followRedirects">followRedirects</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.header">header</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowInsecureInput`<sup>Optional</sup> <a name="allowInsecureInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.allowInsecureInput"></a>

```java
public java.lang.Object getAllowInsecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expectedBodyInput`<sup>Optional</sup> <a name="expectedBodyInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedBodyInput"></a>

```java
public java.lang.String getExpectedBodyInput();
```

- *Type:* java.lang.String

---

##### `expectedCodesInput`<sup>Optional</sup> <a name="expectedCodesInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedCodesInput"></a>

```java
public java.util.List<java.lang.String> getExpectedCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `followRedirectsInput`<sup>Optional</sup> <a name="followRedirectsInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.followRedirectsInput"></a>

```java
public java.lang.Object getFollowRedirectsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.headerInput"></a>

```java
public java.lang.Object getHeaderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `allowInsecure`<sup>Required</sup> <a name="allowInsecure" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.allowInsecure"></a>

```java
public java.lang.Object getAllowInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expectedBody`<sup>Required</sup> <a name="expectedBody" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedBody"></a>

```java
public java.lang.String getExpectedBody();
```

- *Type:* java.lang.String

---

##### `expectedCodes`<sup>Required</sup> <a name="expectedCodes" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.expectedCodes"></a>

```java
public java.util.List<java.lang.String> getExpectedCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `followRedirects`<sup>Required</sup> <a name="followRedirects" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.followRedirects"></a>

```java
public java.lang.Object getFollowRedirects();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.header"></a>

```java
public java.lang.Object getHeader();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckHttpConfig">HealthcheckHttpConfig</a>

---


### HealthcheckTcpConfigOutputReference <a name="HealthcheckTcpConfigOutputReference" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.healthcheck.HealthcheckTcpConfigOutputReference;

new HealthcheckTcpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.healthcheck.HealthcheckTcpConfig">HealthcheckTcpConfig</a>

---



