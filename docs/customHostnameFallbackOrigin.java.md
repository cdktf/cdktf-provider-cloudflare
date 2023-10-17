# `cloudflare_custom_hostname_fallback_origin`

Refer to the Terraform Registory for docs: [`cloudflare_custom_hostname_fallback_origin`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/custom_hostname_fallback_origin).

# `customHostnameFallbackOrigin` Submodule <a name="`customHostnameFallbackOrigin` Submodule" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomHostnameFallbackOrigin <a name="CustomHostnameFallbackOrigin" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/custom_hostname_fallback_origin cloudflare_custom_hostname_fallback_origin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname_fallback_origin.CustomHostnameFallbackOrigin;

CustomHostnameFallbackOrigin.Builder.create(Construct scope, java.lang.String id)
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
    .origin(java.lang.String)
    .zoneId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.origin">origin</a></code> | <code>java.lang.String</code> | Hostname you intend to fallback requests to. Origin must be a proxied A/AAAA/CNAME DNS record within Clouldflare. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/custom_hostname_fallback_origin#id CustomHostnameFallbackOrigin#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.origin"></a>

- *Type:* java.lang.String

Hostname you intend to fallback requests to. Origin must be a proxied A/AAAA/CNAME DNS record within Clouldflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/custom_hostname_fallback_origin#origin CustomHostnameFallbackOrigin#origin}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/custom_hostname_fallback_origin#zone_id CustomHostnameFallbackOrigin#zone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/custom_hostname_fallback_origin#id CustomHostnameFallbackOrigin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CustomHostnameFallbackOrigin resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname_fallback_origin.CustomHostnameFallbackOrigin;

CustomHostnameFallbackOrigin.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname_fallback_origin.CustomHostnameFallbackOrigin;

CustomHostnameFallbackOrigin.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname_fallback_origin.CustomHostnameFallbackOrigin;

CustomHostnameFallbackOrigin.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname_fallback_origin.CustomHostnameFallbackOrigin;

CustomHostnameFallbackOrigin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CustomHostnameFallbackOrigin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CustomHostnameFallbackOrigin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CustomHostnameFallbackOrigin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CustomHostnameFallbackOrigin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/custom_hostname_fallback_origin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CustomHostnameFallbackOrigin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.originInput">originInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.origin">origin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.originInput"></a>

```java
public java.lang.String getOriginInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.origin"></a>

```java
public java.lang.String getOrigin();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOrigin.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CustomHostnameFallbackOriginConfig <a name="CustomHostnameFallbackOriginConfig" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.custom_hostname_fallback_origin.CustomHostnameFallbackOriginConfig;

CustomHostnameFallbackOriginConfig.builder()
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
    .origin(java.lang.String)
    .zoneId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.origin">origin</a></code> | <code>java.lang.String</code> | Hostname you intend to fallback requests to. Origin must be a proxied A/AAAA/CNAME DNS record within Clouldflare. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/custom_hostname_fallback_origin#id CustomHostnameFallbackOrigin#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.origin"></a>

```java
public java.lang.String getOrigin();
```

- *Type:* java.lang.String

Hostname you intend to fallback requests to. Origin must be a proxied A/AAAA/CNAME DNS record within Clouldflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/custom_hostname_fallback_origin#origin CustomHostnameFallbackOrigin#origin}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/custom_hostname_fallback_origin#zone_id CustomHostnameFallbackOrigin#zone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.customHostnameFallbackOrigin.CustomHostnameFallbackOriginConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/custom_hostname_fallback_origin#id CustomHostnameFallbackOrigin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



