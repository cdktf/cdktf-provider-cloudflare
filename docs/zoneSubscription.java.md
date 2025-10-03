# `zoneSubscription` Submodule <a name="`zoneSubscription` Submodule" id="@cdktf/provider-cloudflare.zoneSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZoneSubscription <a name="ZoneSubscription" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription cloudflare_zone_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_subscription.ZoneSubscription;

ZoneSubscription.Builder.create(Construct scope, java.lang.String id)
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
    .zoneId(java.lang.String)
//  .frequency(java.lang.String)
//  .ratePlan(ZoneSubscriptionRatePlan)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Subscription identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.frequency">frequency</a></code> | <code>java.lang.String</code> | How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly". |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.ratePlan">ratePlan</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a></code> | The rate plan applied to the subscription. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Subscription identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#zone_id ZoneSubscription#zone_id}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.frequency"></a>

- *Type:* java.lang.String

How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#frequency ZoneSubscription#frequency}

---

##### `ratePlan`<sup>Optional</sup> <a name="ratePlan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.Initializer.parameter.ratePlan"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a>

The rate plan applied to the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#rate_plan ZoneSubscription#rate_plan}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan">putRatePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetRatePlan">resetRatePlan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRatePlan` <a name="putRatePlan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan"></a>

```java
public void putRatePlan(ZoneSubscriptionRatePlan value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.putRatePlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a>

---

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetFrequency"></a>

```java
public void resetFrequency()
```

##### `resetRatePlan` <a name="resetRatePlan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.resetRatePlan"></a>

```java
public void resetRatePlan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZoneSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_subscription.ZoneSubscription;

ZoneSubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_subscription.ZoneSubscription;

ZoneSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_subscription.ZoneSubscription;

ZoneSubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_subscription.ZoneSubscription;

ZoneSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZoneSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZoneSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZoneSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZoneSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZoneSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currency">currency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currentPeriodEnd">currentPeriodEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currentPeriodStart">currentPeriodStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.price">price</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.ratePlan">ratePlan</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference">ZoneSubscriptionRatePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.ratePlanInput">ratePlanInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currency"></a>

```java
public java.lang.String getCurrency();
```

- *Type:* java.lang.String

---

##### `currentPeriodEnd`<sup>Required</sup> <a name="currentPeriodEnd" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currentPeriodEnd"></a>

```java
public java.lang.String getCurrentPeriodEnd();
```

- *Type:* java.lang.String

---

##### `currentPeriodStart`<sup>Required</sup> <a name="currentPeriodStart" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.currentPeriodStart"></a>

```java
public java.lang.String getCurrentPeriodStart();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `price`<sup>Required</sup> <a name="price" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.price"></a>

```java
public java.lang.Number getPrice();
```

- *Type:* java.lang.Number

---

##### `ratePlan`<sup>Required</sup> <a name="ratePlan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.ratePlan"></a>

```java
public ZoneSubscriptionRatePlanOutputReference getRatePlan();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference">ZoneSubscriptionRatePlanOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `ratePlanInput`<sup>Optional</sup> <a name="ratePlanInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.ratePlanInput"></a>

```java
public java.lang.Object getRatePlanInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZoneSubscriptionConfig <a name="ZoneSubscriptionConfig" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_subscription.ZoneSubscriptionConfig;

ZoneSubscriptionConfig.builder()
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
    .zoneId(java.lang.String)
//  .frequency(java.lang.String)
//  .ratePlan(ZoneSubscriptionRatePlan)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Subscription identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.frequency">frequency</a></code> | <code>java.lang.String</code> | How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly". |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.ratePlan">ratePlan</a></code> | <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a></code> | The rate plan applied to the subscription. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Subscription identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#zone_id ZoneSubscription#zone_id}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#frequency ZoneSubscription#frequency}

---

##### `ratePlan`<sup>Optional</sup> <a name="ratePlan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionConfig.property.ratePlan"></a>

```java
public ZoneSubscriptionRatePlan getRatePlan();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a>

The rate plan applied to the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#rate_plan ZoneSubscription#rate_plan}

---

### ZoneSubscriptionRatePlan <a name="ZoneSubscriptionRatePlan" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_subscription.ZoneSubscriptionRatePlan;

ZoneSubscriptionRatePlan.builder()
//  .currency(java.lang.String)
//  .externallyManaged(java.lang.Boolean)
//  .externallyManaged(IResolvable)
//  .id(java.lang.String)
//  .isContract(java.lang.Boolean)
//  .isContract(IResolvable)
//  .publicName(java.lang.String)
//  .scope(java.lang.String)
//  .sets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.currency">currency</a></code> | <code>java.lang.String</code> | The currency applied to the rate plan subscription. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.externallyManaged">externallyManaged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this rate plan is managed externally from Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the rate plan. Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise". |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.isContract">isContract</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether a rate plan is enterprise-based (or newly adopted term contract). |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.publicName">publicName</a></code> | <code>java.lang.String</code> | The full name of the rate plan. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.scope">scope</a></code> | <code>java.lang.String</code> | The scope that this rate plan applies to. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.sets">sets</a></code> | <code>java.util.List<java.lang.String></code> | The list of sets this rate plan applies to. |

---

##### `currency`<sup>Optional</sup> <a name="currency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.currency"></a>

```java
public java.lang.String getCurrency();
```

- *Type:* java.lang.String

The currency applied to the rate plan subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#currency ZoneSubscription#currency}

---

##### `externallyManaged`<sup>Optional</sup> <a name="externallyManaged" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.externallyManaged"></a>

```java
public java.lang.Object getExternallyManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this rate plan is managed externally from Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#externally_managed ZoneSubscription#externally_managed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the rate plan. Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#id ZoneSubscription#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isContract`<sup>Optional</sup> <a name="isContract" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.isContract"></a>

```java
public java.lang.Object getIsContract();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether a rate plan is enterprise-based (or newly adopted term contract).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#is_contract ZoneSubscription#is_contract}

---

##### `publicName`<sup>Optional</sup> <a name="publicName" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.publicName"></a>

```java
public java.lang.String getPublicName();
```

- *Type:* java.lang.String

The full name of the rate plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#public_name ZoneSubscription#public_name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The scope that this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#scope ZoneSubscription#scope}

---

##### `sets`<sup>Optional</sup> <a name="sets" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan.property.sets"></a>

```java
public java.util.List<java.lang.String> getSets();
```

- *Type:* java.util.List<java.lang.String>

The list of sets this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zone_subscription#sets ZoneSubscription#sets}

---

## Classes <a name="Classes" id="Classes"></a>

### ZoneSubscriptionRatePlanOutputReference <a name="ZoneSubscriptionRatePlanOutputReference" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zone_subscription.ZoneSubscriptionRatePlanOutputReference;

new ZoneSubscriptionRatePlanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetCurrency">resetCurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetExternallyManaged">resetExternallyManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetIsContract">resetIsContract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetPublicName">resetPublicName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetSets">resetSets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCurrency` <a name="resetCurrency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetCurrency"></a>

```java
public void resetCurrency()
```

##### `resetExternallyManaged` <a name="resetExternallyManaged" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetExternallyManaged"></a>

```java
public void resetExternallyManaged()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIsContract` <a name="resetIsContract" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetIsContract"></a>

```java
public void resetIsContract()
```

##### `resetPublicName` <a name="resetPublicName" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetPublicName"></a>

```java
public void resetPublicName()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetSets` <a name="resetSets" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.resetSets"></a>

```java
public void resetSets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.currencyInput">currencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.externallyManagedInput">externallyManagedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.isContractInput">isContractInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.publicNameInput">publicNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.setsInput">setsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.currency">currency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.externallyManaged">externallyManaged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.isContract">isContract</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.publicName">publicName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.sets">sets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currencyInput`<sup>Optional</sup> <a name="currencyInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.currencyInput"></a>

```java
public java.lang.String getCurrencyInput();
```

- *Type:* java.lang.String

---

##### `externallyManagedInput`<sup>Optional</sup> <a name="externallyManagedInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.externallyManagedInput"></a>

```java
public java.lang.Object getExternallyManagedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isContractInput`<sup>Optional</sup> <a name="isContractInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.isContractInput"></a>

```java
public java.lang.Object getIsContractInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publicNameInput`<sup>Optional</sup> <a name="publicNameInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.publicNameInput"></a>

```java
public java.lang.String getPublicNameInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `setsInput`<sup>Optional</sup> <a name="setsInput" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.setsInput"></a>

```java
public java.util.List<java.lang.String> getSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.currency"></a>

```java
public java.lang.String getCurrency();
```

- *Type:* java.lang.String

---

##### `externallyManaged`<sup>Required</sup> <a name="externallyManaged" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.externallyManaged"></a>

```java
public java.lang.Object getExternallyManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isContract`<sup>Required</sup> <a name="isContract" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.isContract"></a>

```java
public java.lang.Object getIsContract();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publicName`<sup>Required</sup> <a name="publicName" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.publicName"></a>

```java
public java.lang.String getPublicName();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `sets`<sup>Required</sup> <a name="sets" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.sets"></a>

```java
public java.util.List<java.lang.String> getSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlanOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zoneSubscription.ZoneSubscriptionRatePlan">ZoneSubscriptionRatePlan</a>

---



