# `rateLimit` Submodule <a name="`rateLimit` Submodule" id="@cdktf/provider-cloudflare.rateLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RateLimit <a name="RateLimit" id="@cdktf/provider-cloudflare.rateLimit.RateLimit"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit cloudflare_rate_limit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimit;

RateLimit.Builder.create(Construct scope, java.lang.String id)
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
    .action(RateLimitAction)
    .period(java.lang.Number)
    .threshold(java.lang.Number)
    .zoneId(java.lang.String)
//  .bypassUrlPatterns(java.util.List<java.lang.String>)
//  .correlate(RateLimitCorrelate)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .id(java.lang.String)
//  .match(RateLimitMatch)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction">RateLimitAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.period">period</a></code> | <code>java.lang.Number</code> | The time in seconds to count matching traffic. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.threshold">threshold</a></code> | <code>java.lang.Number</code> | The threshold that triggers the rate limit mitigations, combine with period. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.bypassUrlPatterns">bypassUrlPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#bypass_url_patterns RateLimit#bypass_url_patterns}. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.correlate">correlate</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate">RateLimitCorrelate</a></code> | correlate block. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A note that you can use to describe the reason for a rate limit. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this ratelimit is currently disabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#id RateLimit#id}. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.match">match</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch">RateLimitMatch</a></code> | match block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction">RateLimitAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#action RateLimit#action}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.period"></a>

- *Type:* java.lang.Number

The time in seconds to count matching traffic.

If the count exceeds threshold within this period the action will be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#period RateLimit#period}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.threshold"></a>

- *Type:* java.lang.Number

The threshold that triggers the rate limit mitigations, combine with period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#threshold RateLimit#threshold}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#zone_id RateLimit#zone_id}

---

##### `bypassUrlPatterns`<sup>Optional</sup> <a name="bypassUrlPatterns" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.bypassUrlPatterns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#bypass_url_patterns RateLimit#bypass_url_patterns}.

---

##### `correlate`<sup>Optional</sup> <a name="correlate" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.correlate"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate">RateLimitCorrelate</a>

correlate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#correlate RateLimit#correlate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A note that you can use to describe the reason for a rate limit.

This value is sanitized and all tags are removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#description RateLimit#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this ratelimit is currently disabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#disabled RateLimit#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#id RateLimit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.Initializer.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch">RateLimitMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#match RateLimit#match}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.putCorrelate">putCorrelate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.resetBypassUrlPatterns">resetBypassUrlPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.resetCorrelate">resetCorrelate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.resetMatch">resetMatch</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.putAction"></a>

```java
public void putAction(RateLimitAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction">RateLimitAction</a>

---

##### `putCorrelate` <a name="putCorrelate" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.putCorrelate"></a>

```java
public void putCorrelate(RateLimitCorrelate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.putCorrelate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate">RateLimitCorrelate</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.putMatch"></a>

```java
public void putMatch(RateLimitMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch">RateLimitMatch</a>

---

##### `resetBypassUrlPatterns` <a name="resetBypassUrlPatterns" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.resetBypassUrlPatterns"></a>

```java
public void resetBypassUrlPatterns()
```

##### `resetCorrelate` <a name="resetCorrelate" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.resetCorrelate"></a>

```java
public void resetCorrelate()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.resetId"></a>

```java
public void resetId()
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.resetMatch"></a>

```java
public void resetMatch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RateLimit resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimit;

RateLimit.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimit;

RateLimit.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimit;

RateLimit.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimit;

RateLimit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RateLimit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RateLimit resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RateLimit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RateLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RateLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.action">action</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference">RateLimitActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.correlate">correlate</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference">RateLimitCorrelateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.match">match</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference">RateLimitMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction">RateLimitAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.bypassUrlPatternsInput">bypassUrlPatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.correlateInput">correlateInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate">RateLimitCorrelate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch">RateLimitMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.bypassUrlPatterns">bypassUrlPatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.action"></a>

```java
public RateLimitActionOutputReference getAction();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference">RateLimitActionOutputReference</a>

---

##### `correlate`<sup>Required</sup> <a name="correlate" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.correlate"></a>

```java
public RateLimitCorrelateOutputReference getCorrelate();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference">RateLimitCorrelateOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.match"></a>

```java
public RateLimitMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference">RateLimitMatchOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.actionInput"></a>

```java
public RateLimitAction getActionInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction">RateLimitAction</a>

---

##### `bypassUrlPatternsInput`<sup>Optional</sup> <a name="bypassUrlPatternsInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.bypassUrlPatternsInput"></a>

```java
public java.util.List<java.lang.String> getBypassUrlPatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `correlateInput`<sup>Optional</sup> <a name="correlateInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.correlateInput"></a>

```java
public RateLimitCorrelate getCorrelateInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate">RateLimitCorrelate</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.matchInput"></a>

```java
public RateLimitMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch">RateLimitMatch</a>

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `bypassUrlPatterns`<sup>Required</sup> <a name="bypassUrlPatterns" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.bypassUrlPatterns"></a>

```java
public java.util.List<java.lang.String> getBypassUrlPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimit.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.rateLimit.RateLimit.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RateLimitAction <a name="RateLimitAction" id="@cdktf/provider-cloudflare.rateLimit.RateLimitAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.rateLimit.RateLimitAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimitAction;

RateLimitAction.builder()
    .mode(java.lang.String)
//  .response(RateLimitActionResponse)
//  .timeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction.property.mode">mode</a></code> | <code>java.lang.String</code> | The type of action to perform. Available values: `simulate`, `ban`, `challenge`, `js_challenge`, `managed_challenge`. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction.property.response">response</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse">RateLimitActionResponse</a></code> | response block. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | The time in seconds as an integer to perform the mitigation action. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.rateLimit.RateLimitAction.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The type of action to perform. Available values: `simulate`, `ban`, `challenge`, `js_challenge`, `managed_challenge`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#mode RateLimit#mode}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-cloudflare.rateLimit.RateLimitAction.property.response"></a>

```java
public RateLimitActionResponse getResponse();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse">RateLimitActionResponse</a>

response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#response RateLimit#response}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-cloudflare.rateLimit.RateLimitAction.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

The time in seconds as an integer to perform the mitigation action.

This field is required if the `mode` is either `simulate` or `ban`. Must be the same or greater than the period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#timeout RateLimit#timeout}

---

### RateLimitActionResponse <a name="RateLimitActionResponse" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimitActionResponse;

RateLimitActionResponse.builder()
    .body(java.lang.String)
    .contentType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse.property.body">body</a></code> | <code>java.lang.String</code> | The body to return, the content here should conform to the `content_type`. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse.property.contentType">contentType</a></code> | <code>java.lang.String</code> | The content-type of the body. Available values: `text/plain`, `text/xml`, `application/json`. |

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

The body to return, the content here should conform to the `content_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#body RateLimit#body}

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

The content-type of the body. Available values: `text/plain`, `text/xml`, `application/json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#content_type RateLimit#content_type}

---

### RateLimitConfig <a name="RateLimitConfig" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimitConfig;

RateLimitConfig.builder()
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
    .action(RateLimitAction)
    .period(java.lang.Number)
    .threshold(java.lang.Number)
    .zoneId(java.lang.String)
//  .bypassUrlPatterns(java.util.List<java.lang.String>)
//  .correlate(RateLimitCorrelate)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .id(java.lang.String)
//  .match(RateLimitMatch)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.action">action</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction">RateLimitAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.period">period</a></code> | <code>java.lang.Number</code> | The time in seconds to count matching traffic. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | The threshold that triggers the rate limit mitigations, combine with period. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.bypassUrlPatterns">bypassUrlPatterns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#bypass_url_patterns RateLimit#bypass_url_patterns}. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.correlate">correlate</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate">RateLimitCorrelate</a></code> | correlate block. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.description">description</a></code> | <code>java.lang.String</code> | A note that you can use to describe the reason for a rate limit. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this ratelimit is currently disabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#id RateLimit#id}. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.match">match</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch">RateLimitMatch</a></code> | match block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.action"></a>

```java
public RateLimitAction getAction();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction">RateLimitAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#action RateLimit#action}

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

The time in seconds to count matching traffic.

If the count exceeds threshold within this period the action will be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#period RateLimit#period}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

The threshold that triggers the rate limit mitigations, combine with period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#threshold RateLimit#threshold}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#zone_id RateLimit#zone_id}

---

##### `bypassUrlPatterns`<sup>Optional</sup> <a name="bypassUrlPatterns" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.bypassUrlPatterns"></a>

```java
public java.util.List<java.lang.String> getBypassUrlPatterns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#bypass_url_patterns RateLimit#bypass_url_patterns}.

---

##### `correlate`<sup>Optional</sup> <a name="correlate" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.correlate"></a>

```java
public RateLimitCorrelate getCorrelate();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate">RateLimitCorrelate</a>

correlate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#correlate RateLimit#correlate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A note that you can use to describe the reason for a rate limit.

This value is sanitized and all tags are removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#description RateLimit#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this ratelimit is currently disabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#disabled RateLimit#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#id RateLimit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.rateLimit.RateLimitConfig.property.match"></a>

```java
public RateLimitMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch">RateLimitMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#match RateLimit#match}

---

### RateLimitCorrelate <a name="RateLimitCorrelate" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimitCorrelate;

RateLimitCorrelate.builder()
//  .by(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate.property.by">by</a></code> | <code>java.lang.String</code> | If set to 'nat', NAT support will be enabled for rate limiting. Available values: `nat`. |

---

##### `by`<sup>Optional</sup> <a name="by" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate.property.by"></a>

```java
public java.lang.String getBy();
```

- *Type:* java.lang.String

If set to 'nat', NAT support will be enabled for rate limiting. Available values: `nat`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#by RateLimit#by}

---

### RateLimitMatch <a name="RateLimitMatch" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimitMatch;

RateLimitMatch.builder()
//  .request(RateLimitMatchRequest)
//  .response(RateLimitMatchResponse)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch.property.request">request</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest">RateLimitMatchRequest</a></code> | request block. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch.property.response">response</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse">RateLimitMatchResponse</a></code> | response block. |

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatch.property.request"></a>

```java
public RateLimitMatchRequest getRequest();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest">RateLimitMatchRequest</a>

request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#request RateLimit#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatch.property.response"></a>

```java
public RateLimitMatchResponse getResponse();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse">RateLimitMatchResponse</a>

response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#response RateLimit#response}

---

### RateLimitMatchRequest <a name="RateLimitMatchRequest" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimitMatchRequest;

RateLimitMatchRequest.builder()
//  .methods(java.util.List<java.lang.String>)
//  .schemes(java.util.List<java.lang.String>)
//  .urlPattern(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest.property.methods">methods</a></code> | <code>java.util.List<java.lang.String></code> | HTTP Methods to match traffic on. Available values: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `HEAD`, `_ALL_`. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest.property.schemes">schemes</a></code> | <code>java.util.List<java.lang.String></code> | HTTP schemes to match traffic on. Available values: `HTTP`, `HTTPS`, `_ALL_`. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest.property.urlPattern">urlPattern</a></code> | <code>java.lang.String</code> | The URL pattern to match comprised of the host and path, i.e. example.org/path. Wildcard are expanded to match applicable traffic, query strings are not matched. Use _ for all traffic to your zone. |

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest.property.methods"></a>

```java
public java.util.List<java.lang.String> getMethods();
```

- *Type:* java.util.List<java.lang.String>

HTTP Methods to match traffic on. Available values: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `HEAD`, `_ALL_`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#methods RateLimit#methods}

---

##### `schemes`<sup>Optional</sup> <a name="schemes" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest.property.schemes"></a>

```java
public java.util.List<java.lang.String> getSchemes();
```

- *Type:* java.util.List<java.lang.String>

HTTP schemes to match traffic on. Available values: `HTTP`, `HTTPS`, `_ALL_`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#schemes RateLimit#schemes}

---

##### `urlPattern`<sup>Optional</sup> <a name="urlPattern" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest.property.urlPattern"></a>

```java
public java.lang.String getUrlPattern();
```

- *Type:* java.lang.String

The URL pattern to match comprised of the host and path, i.e. example.org/path. Wildcard are expanded to match applicable traffic, query strings are not matched. Use _ for all traffic to your zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#url_pattern RateLimit#url_pattern}

---

### RateLimitMatchResponse <a name="RateLimitMatchResponse" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimitMatchResponse;

RateLimitMatchResponse.builder()
//  .headers(IResolvable)
//  .headers(java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .originTraffic(java.lang.Boolean)
//  .originTraffic(IResolvable)
//  .statuses(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | List of HTTP headers maps to match the origin response on. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse.property.originTraffic">originTraffic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Only count traffic that has come from your origin servers. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse.property.statuses">statuses</a></code> | <code>java.util.List<java.lang.Number></code> | HTTP Status codes, can be one, many or indicate all by not providing this value. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

List of HTTP headers maps to match the origin response on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#headers RateLimit#headers}

---

##### `originTraffic`<sup>Optional</sup> <a name="originTraffic" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse.property.originTraffic"></a>

```java
public java.lang.Object getOriginTraffic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Only count traffic that has come from your origin servers.

If true, cached items that Cloudflare serve will not count towards rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#origin_traffic RateLimit#origin_traffic}

---

##### `statuses`<sup>Optional</sup> <a name="statuses" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse.property.statuses"></a>

```java
public java.util.List<java.lang.Number> getStatuses();
```

- *Type:* java.util.List<java.lang.Number>

HTTP Status codes, can be one, many or indicate all by not providing this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.30.0/docs/resources/rate_limit#statuses RateLimit#statuses}

---

## Classes <a name="Classes" id="Classes"></a>

### RateLimitActionOutputReference <a name="RateLimitActionOutputReference" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimitActionOutputReference;

new RateLimitActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.putResponse">putResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.resetResponse">resetResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResponse` <a name="putResponse" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.putResponse"></a>

```java
public void putResponse(RateLimitActionResponse value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.putResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse">RateLimitActionResponse</a>

---

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.resetResponse"></a>

```java
public void resetResponse()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.response">response</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference">RateLimitActionResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.responseInput">responseInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse">RateLimitActionResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction">RateLimitAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.response"></a>

```java
public RateLimitActionResponseOutputReference getResponse();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference">RateLimitActionResponseOutputReference</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.responseInput"></a>

```java
public RateLimitActionResponse getResponseInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse">RateLimitActionResponse</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionOutputReference.property.internalValue"></a>

```java
public RateLimitAction getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitAction">RateLimitAction</a>

---


### RateLimitActionResponseOutputReference <a name="RateLimitActionResponseOutputReference" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimitActionResponseOutputReference;

new RateLimitActionResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse">RateLimitActionResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponseOutputReference.property.internalValue"></a>

```java
public RateLimitActionResponse getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitActionResponse">RateLimitActionResponse</a>

---


### RateLimitCorrelateOutputReference <a name="RateLimitCorrelateOutputReference" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimitCorrelateOutputReference;

new RateLimitCorrelateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.resetBy">resetBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBy` <a name="resetBy" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.resetBy"></a>

```java
public void resetBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.byInput">byInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.by">by</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate">RateLimitCorrelate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `byInput`<sup>Optional</sup> <a name="byInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.byInput"></a>

```java
public java.lang.String getByInput();
```

- *Type:* java.lang.String

---

##### `by`<sup>Required</sup> <a name="by" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.by"></a>

```java
public java.lang.String getBy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelateOutputReference.property.internalValue"></a>

```java
public RateLimitCorrelate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitCorrelate">RateLimitCorrelate</a>

---


### RateLimitMatchOutputReference <a name="RateLimitMatchOutputReference" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimitMatchOutputReference;

new RateLimitMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.putRequest">putRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.putResponse">putResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.resetRequest">resetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequest` <a name="putRequest" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.putRequest"></a>

```java
public void putRequest(RateLimitMatchRequest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.putRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest">RateLimitMatchRequest</a>

---

##### `putResponse` <a name="putResponse" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.putResponse"></a>

```java
public void putResponse(RateLimitMatchResponse value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.putResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse">RateLimitMatchResponse</a>

---

##### `resetRequest` <a name="resetRequest" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.resetRequest"></a>

```java
public void resetRequest()
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.resetResponse"></a>

```java
public void resetResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.request">request</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference">RateLimitMatchRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.response">response</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference">RateLimitMatchResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.requestInput">requestInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest">RateLimitMatchRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.responseInput">responseInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse">RateLimitMatchResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch">RateLimitMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.request"></a>

```java
public RateLimitMatchRequestOutputReference getRequest();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference">RateLimitMatchRequestOutputReference</a>

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.response"></a>

```java
public RateLimitMatchResponseOutputReference getResponse();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference">RateLimitMatchResponseOutputReference</a>

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.requestInput"></a>

```java
public RateLimitMatchRequest getRequestInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest">RateLimitMatchRequest</a>

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.responseInput"></a>

```java
public RateLimitMatchResponse getResponseInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse">RateLimitMatchResponse</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchOutputReference.property.internalValue"></a>

```java
public RateLimitMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatch">RateLimitMatch</a>

---


### RateLimitMatchRequestOutputReference <a name="RateLimitMatchRequestOutputReference" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimitMatchRequestOutputReference;

new RateLimitMatchRequestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resetMethods">resetMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resetSchemes">resetSchemes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resetUrlPattern">resetUrlPattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethods` <a name="resetMethods" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resetMethods"></a>

```java
public void resetMethods()
```

##### `resetSchemes` <a name="resetSchemes" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resetSchemes"></a>

```java
public void resetSchemes()
```

##### `resetUrlPattern` <a name="resetUrlPattern" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.resetUrlPattern"></a>

```java
public void resetUrlPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.methodsInput">methodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.schemesInput">schemesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.urlPatternInput">urlPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.methods">methods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.schemes">schemes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.urlPattern">urlPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest">RateLimitMatchRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodsInput`<sup>Optional</sup> <a name="methodsInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.methodsInput"></a>

```java
public java.util.List<java.lang.String> getMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schemesInput`<sup>Optional</sup> <a name="schemesInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.schemesInput"></a>

```java
public java.util.List<java.lang.String> getSchemesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `urlPatternInput`<sup>Optional</sup> <a name="urlPatternInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.urlPatternInput"></a>

```java
public java.lang.String getUrlPatternInput();
```

- *Type:* java.lang.String

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.methods"></a>

```java
public java.util.List<java.lang.String> getMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schemes`<sup>Required</sup> <a name="schemes" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.schemes"></a>

```java
public java.util.List<java.lang.String> getSchemes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `urlPattern`<sup>Required</sup> <a name="urlPattern" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.urlPattern"></a>

```java
public java.lang.String getUrlPattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequestOutputReference.property.internalValue"></a>

```java
public RateLimitMatchRequest getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchRequest">RateLimitMatchRequest</a>

---


### RateLimitMatchResponseOutputReference <a name="RateLimitMatchResponseOutputReference" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.rate_limit.RateLimitMatchResponseOutputReference;

new RateLimitMatchResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resetOriginTraffic">resetOriginTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resetStatuses">resetStatuses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```

##### `resetOriginTraffic` <a name="resetOriginTraffic" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resetOriginTraffic"></a>

```java
public void resetOriginTraffic()
```

##### `resetStatuses` <a name="resetStatuses" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.resetStatuses"></a>

```java
public void resetStatuses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.headersInput">headersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.originTrafficInput">originTrafficInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.statusesInput">statusesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.headers">headers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.originTraffic">originTraffic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.statuses">statuses</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse">RateLimitMatchResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.headersInput"></a>

```java
public java.lang.Object getHeadersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `originTrafficInput`<sup>Optional</sup> <a name="originTrafficInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.originTrafficInput"></a>

```java
public java.lang.Object getOriginTrafficInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statusesInput`<sup>Optional</sup> <a name="statusesInput" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.statusesInput"></a>

```java
public java.util.List<java.lang.Number> getStatusesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.headers"></a>

```java
public java.lang.Object getHeaders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `originTraffic`<sup>Required</sup> <a name="originTraffic" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.originTraffic"></a>

```java
public java.lang.Object getOriginTraffic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statuses`<sup>Required</sup> <a name="statuses" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.statuses"></a>

```java
public java.util.List<java.lang.Number> getStatuses();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponseOutputReference.property.internalValue"></a>

```java
public RateLimitMatchResponse getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.rateLimit.RateLimitMatchResponse">RateLimitMatchResponse</a>

---



