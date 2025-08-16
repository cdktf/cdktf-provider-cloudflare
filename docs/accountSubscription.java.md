# `accountSubscription` Submodule <a name="`accountSubscription` Submodule" id="@cdktf/provider-cloudflare.accountSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountSubscription <a name="AccountSubscription" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/account_subscription cloudflare_account_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_subscription.AccountSubscription;

AccountSubscription.Builder.create(Construct scope, java.lang.String id)
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
//  .frequency(java.lang.String)
//  .ratePlan(AccountSubscriptionRatePlan)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.frequency">frequency</a></code> | <code>java.lang.String</code> | How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly". |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.ratePlan">ratePlan</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a></code> | The rate plan applied to the subscription. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/account_subscription#account_id AccountSubscription#account_id}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.frequency"></a>

- *Type:* java.lang.String

How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/account_subscription#frequency AccountSubscription#frequency}

---

##### `ratePlan`<sup>Optional</sup> <a name="ratePlan" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.Initializer.parameter.ratePlan"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a>

The rate plan applied to the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/account_subscription#rate_plan AccountSubscription#rate_plan}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.putRatePlan">putRatePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetRatePlan">resetRatePlan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRatePlan` <a name="putRatePlan" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.putRatePlan"></a>

```java
public void putRatePlan(AccountSubscriptionRatePlan value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.putRatePlan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a>

---

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetFrequency"></a>

```java
public void resetFrequency()
```

##### `resetRatePlan` <a name="resetRatePlan" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.resetRatePlan"></a>

```java
public void resetRatePlan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccountSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_subscription.AccountSubscription;

AccountSubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_subscription.AccountSubscription;

AccountSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_subscription.AccountSubscription;

AccountSubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_subscription.AccountSubscription;

AccountSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AccountSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AccountSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AccountSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AccountSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/account_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AccountSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currency">currency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currentPeriodEnd">currentPeriodEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currentPeriodStart">currentPeriodStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.price">price</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.ratePlan">ratePlan</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference">AccountSubscriptionRatePlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.ratePlanInput">ratePlanInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currency"></a>

```java
public java.lang.String getCurrency();
```

- *Type:* java.lang.String

---

##### `currentPeriodEnd`<sup>Required</sup> <a name="currentPeriodEnd" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currentPeriodEnd"></a>

```java
public java.lang.String getCurrentPeriodEnd();
```

- *Type:* java.lang.String

---

##### `currentPeriodStart`<sup>Required</sup> <a name="currentPeriodStart" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.currentPeriodStart"></a>

```java
public java.lang.String getCurrentPeriodStart();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `price`<sup>Required</sup> <a name="price" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.price"></a>

```java
public java.lang.Number getPrice();
```

- *Type:* java.lang.Number

---

##### `ratePlan`<sup>Required</sup> <a name="ratePlan" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.ratePlan"></a>

```java
public AccountSubscriptionRatePlanOutputReference getRatePlan();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference">AccountSubscriptionRatePlanOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `ratePlanInput`<sup>Optional</sup> <a name="ratePlanInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.ratePlanInput"></a>

```java
public java.lang.Object getRatePlanInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccountSubscriptionConfig <a name="AccountSubscriptionConfig" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_subscription.AccountSubscriptionConfig;

AccountSubscriptionConfig.builder()
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
//  .frequency(java.lang.String)
//  .ratePlan(AccountSubscriptionRatePlan)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.frequency">frequency</a></code> | <code>java.lang.String</code> | How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly". |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.ratePlan">ratePlan</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a></code> | The rate plan applied to the subscription. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/account_subscription#account_id AccountSubscription#account_id}

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

How often the subscription is renewed automatically. Available values: "weekly", "monthly", "quarterly", "yearly".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/account_subscription#frequency AccountSubscription#frequency}

---

##### `ratePlan`<sup>Optional</sup> <a name="ratePlan" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionConfig.property.ratePlan"></a>

```java
public AccountSubscriptionRatePlan getRatePlan();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a>

The rate plan applied to the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/account_subscription#rate_plan AccountSubscription#rate_plan}

---

### AccountSubscriptionRatePlan <a name="AccountSubscriptionRatePlan" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_subscription.AccountSubscriptionRatePlan;

AccountSubscriptionRatePlan.builder()
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
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.currency">currency</a></code> | <code>java.lang.String</code> | The currency applied to the rate plan subscription. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.externallyManaged">externallyManaged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether this rate plan is managed externally from Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the rate plan. Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise". |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.isContract">isContract</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether a rate plan is enterprise-based (or newly adopted term contract). |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.publicName">publicName</a></code> | <code>java.lang.String</code> | The full name of the rate plan. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.scope">scope</a></code> | <code>java.lang.String</code> | The scope that this rate plan applies to. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.sets">sets</a></code> | <code>java.util.List<java.lang.String></code> | The list of sets this rate plan applies to. |

---

##### `currency`<sup>Optional</sup> <a name="currency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.currency"></a>

```java
public java.lang.String getCurrency();
```

- *Type:* java.lang.String

The currency applied to the rate plan subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/account_subscription#currency AccountSubscription#currency}

---

##### `externallyManaged`<sup>Optional</sup> <a name="externallyManaged" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.externallyManaged"></a>

```java
public java.lang.Object getExternallyManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether this rate plan is managed externally from Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/account_subscription#externally_managed AccountSubscription#externally_managed}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the rate plan. Available values: "free", "lite", "pro", "pro_plus", "business", "enterprise", "partners_free", "partners_pro", "partners_business", "partners_enterprise".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/account_subscription#id AccountSubscription#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isContract`<sup>Optional</sup> <a name="isContract" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.isContract"></a>

```java
public java.lang.Object getIsContract();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether a rate plan is enterprise-based (or newly adopted term contract).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/account_subscription#is_contract AccountSubscription#is_contract}

---

##### `publicName`<sup>Optional</sup> <a name="publicName" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.publicName"></a>

```java
public java.lang.String getPublicName();
```

- *Type:* java.lang.String

The full name of the rate plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/account_subscription#public_name AccountSubscription#public_name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The scope that this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/account_subscription#scope AccountSubscription#scope}

---

##### `sets`<sup>Optional</sup> <a name="sets" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan.property.sets"></a>

```java
public java.util.List<java.lang.String> getSets();
```

- *Type:* java.util.List<java.lang.String>

The list of sets this rate plan applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/account_subscription#sets AccountSubscription#sets}

---

## Classes <a name="Classes" id="Classes"></a>

### AccountSubscriptionRatePlanOutputReference <a name="AccountSubscriptionRatePlanOutputReference" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.account_subscription.AccountSubscriptionRatePlanOutputReference;

new AccountSubscriptionRatePlanOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetCurrency">resetCurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetExternallyManaged">resetExternallyManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetIsContract">resetIsContract</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetPublicName">resetPublicName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetSets">resetSets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCurrency` <a name="resetCurrency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetCurrency"></a>

```java
public void resetCurrency()
```

##### `resetExternallyManaged` <a name="resetExternallyManaged" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetExternallyManaged"></a>

```java
public void resetExternallyManaged()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIsContract` <a name="resetIsContract" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetIsContract"></a>

```java
public void resetIsContract()
```

##### `resetPublicName` <a name="resetPublicName" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetPublicName"></a>

```java
public void resetPublicName()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetSets` <a name="resetSets" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.resetSets"></a>

```java
public void resetSets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.currencyInput">currencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.externallyManagedInput">externallyManagedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.isContractInput">isContractInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.publicNameInput">publicNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.setsInput">setsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.currency">currency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.externallyManaged">externallyManaged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.isContract">isContract</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.publicName">publicName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.sets">sets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currencyInput`<sup>Optional</sup> <a name="currencyInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.currencyInput"></a>

```java
public java.lang.String getCurrencyInput();
```

- *Type:* java.lang.String

---

##### `externallyManagedInput`<sup>Optional</sup> <a name="externallyManagedInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.externallyManagedInput"></a>

```java
public java.lang.Object getExternallyManagedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isContractInput`<sup>Optional</sup> <a name="isContractInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.isContractInput"></a>

```java
public java.lang.Object getIsContractInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publicNameInput`<sup>Optional</sup> <a name="publicNameInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.publicNameInput"></a>

```java
public java.lang.String getPublicNameInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `setsInput`<sup>Optional</sup> <a name="setsInput" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.setsInput"></a>

```java
public java.util.List<java.lang.String> getSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.currency"></a>

```java
public java.lang.String getCurrency();
```

- *Type:* java.lang.String

---

##### `externallyManaged`<sup>Required</sup> <a name="externallyManaged" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.externallyManaged"></a>

```java
public java.lang.Object getExternallyManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isContract`<sup>Required</sup> <a name="isContract" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.isContract"></a>

```java
public java.lang.Object getIsContract();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publicName`<sup>Required</sup> <a name="publicName" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.publicName"></a>

```java
public java.lang.String getPublicName();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `sets`<sup>Required</sup> <a name="sets" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.sets"></a>

```java
public java.util.List<java.lang.String> getSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlanOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.accountSubscription.AccountSubscriptionRatePlan">AccountSubscriptionRatePlan</a>

---



