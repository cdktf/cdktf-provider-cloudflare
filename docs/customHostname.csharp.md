# `customHostname` Submodule <a name="`customHostname` Submodule" id="@cdktf/provider-cloudflare.customHostname"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomHostname <a name="CustomHostname" id="@cdktf/provider-cloudflare.customHostname.CustomHostname"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname cloudflare_custom_hostname}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CustomHostname(Construct Scope, string Id, CustomHostnameConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig">CustomHostnameConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig">CustomHostnameConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl">PutSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomMetadata">ResetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginServer">ResetCustomOriginServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginSni">ResetCustomOriginSni</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSsl` <a name="PutSsl" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl"></a>

```csharp
private void PutSsl(CustomHostnameSsl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.putSsl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>

---

##### `ResetCustomMetadata` <a name="ResetCustomMetadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomMetadata"></a>

```csharp
private void ResetCustomMetadata()
```

##### `ResetCustomOriginServer` <a name="ResetCustomOriginServer" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginServer"></a>

```csharp
private void ResetCustomOriginServer()
```

##### `ResetCustomOriginSni` <a name="ResetCustomOriginSni" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.resetCustomOriginSni"></a>

```csharp
private void ResetCustomOriginSni()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CustomHostname resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CustomHostname.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CustomHostname.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CustomHostname.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

CustomHostname.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CustomHostname resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomHostname to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomHostname that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CustomHostname to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerification">OwnershipVerification</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference">CustomHostnameOwnershipVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerificationHttp">OwnershipVerificationHttp</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference">CustomHostnameOwnershipVerificationHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ssl">Ssl</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference">CustomHostnameSslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.verificationErrors">VerificationErrors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customMetadataInput">CustomMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginServerInput">CustomOriginServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginSniInput">CustomOriginSniInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.sslInput">SslInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customMetadata">CustomMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginServer">CustomOriginServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginSni">CustomOriginSni</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OwnershipVerification`<sup>Required</sup> <a name="OwnershipVerification" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerification"></a>

```csharp
public CustomHostnameOwnershipVerificationOutputReference OwnershipVerification { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference">CustomHostnameOwnershipVerificationOutputReference</a>

---

##### `OwnershipVerificationHttp`<sup>Required</sup> <a name="OwnershipVerificationHttp" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ownershipVerificationHttp"></a>

```csharp
public CustomHostnameOwnershipVerificationHttpOutputReference OwnershipVerificationHttp { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference">CustomHostnameOwnershipVerificationHttpOutputReference</a>

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.ssl"></a>

```csharp
public CustomHostnameSslOutputReference Ssl { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference">CustomHostnameSslOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `VerificationErrors`<sup>Required</sup> <a name="VerificationErrors" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.verificationErrors"></a>

```csharp
public string[] VerificationErrors { get; }
```

- *Type:* string[]

---

##### `CustomMetadataInput`<sup>Optional</sup> <a name="CustomMetadataInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CustomOriginServerInput`<sup>Optional</sup> <a name="CustomOriginServerInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginServerInput"></a>

```csharp
public string CustomOriginServerInput { get; }
```

- *Type:* string

---

##### `CustomOriginSniInput`<sup>Optional</sup> <a name="CustomOriginSniInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginSniInput"></a>

```csharp
public string CustomOriginSniInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `SslInput`<sup>Optional</sup> <a name="SslInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.sslInput"></a>

```csharp
public object SslInput { get; }
```

- *Type:* object

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CustomOriginServer`<sup>Required</sup> <a name="CustomOriginServer" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginServer"></a>

```csharp
public string CustomOriginServer { get; }
```

- *Type:* string

---

##### `CustomOriginSni`<sup>Required</sup> <a name="CustomOriginSni" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.customOriginSni"></a>

```csharp
public string CustomOriginSni { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostname.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.customHostname.CustomHostname.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomHostnameConfig <a name="CustomHostnameConfig" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CustomHostnameConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Hostname,
    CustomHostnameSsl Ssl,
    string ZoneId,
    System.Collections.Generic.IDictionary<string, string> CustomMetadata = null,
    string CustomOriginServer = null,
    string CustomOriginSni = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.hostname">Hostname</a></code> | <code>string</code> | The custom hostname that will point to your hostname via CNAME. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.ssl">Ssl</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a></code> | SSL properties used when creating the custom hostname. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customMetadata">CustomMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Unique key/value metadata for this hostname. These are per-hostname (customer) settings. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginServer">CustomOriginServer</a></code> | <code>string</code> | a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginSni">CustomOriginSni</a></code> | <code>string</code> | A hostname that will be sent to your custom origin server as SNI for TLS handshake. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

The custom hostname that will point to your hostname via CNAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#hostname CustomHostname#hostname}

---

##### `Ssl`<sup>Required</sup> <a name="Ssl" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.ssl"></a>

```csharp
public CustomHostnameSsl Ssl { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl">CustomHostnameSsl</a>

SSL properties used when creating the custom hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#ssl CustomHostname#ssl}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#zone_id CustomHostname#zone_id}

---

##### `CustomMetadata`<sup>Optional</sup> <a name="CustomMetadata" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Unique key/value metadata for this hostname. These are per-hostname (customer) settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#custom_metadata CustomHostname#custom_metadata}

---

##### `CustomOriginServer`<sup>Optional</sup> <a name="CustomOriginServer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginServer"></a>

```csharp
public string CustomOriginServer { get; set; }
```

- *Type:* string

a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#custom_origin_server CustomHostname#custom_origin_server}

---

##### `CustomOriginSni`<sup>Optional</sup> <a name="CustomOriginSni" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameConfig.property.customOriginSni"></a>

```csharp
public string CustomOriginSni { get; set; }
```

- *Type:* string

A hostname that will be sent to your custom origin server as SNI for TLS handshake.

This can be a valid subdomain of the zone or custom origin server name or the string ':request_host_header:' which will cause the host header in the request to be used as SNI. Not configurable with default/fallback origin server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#custom_origin_sni CustomHostname#custom_origin_sni}

---

### CustomHostnameOwnershipVerification <a name="CustomHostnameOwnershipVerification" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CustomHostnameOwnershipVerification {

};
```


### CustomHostnameOwnershipVerificationHttp <a name="CustomHostnameOwnershipVerificationHttp" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CustomHostnameOwnershipVerificationHttp {

};
```


### CustomHostnameSsl <a name="CustomHostnameSsl" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CustomHostnameSsl {
    string BundleMethod = null,
    string CertificateAuthority = null,
    object CloudflareBranding = null,
    object CustomCertBundle = null,
    string CustomCertificate = null,
    string CustomKey = null,
    string Method = null,
    CustomHostnameSslSettings Settings = null,
    string Type = null,
    object Wildcard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.bundleMethod">BundleMethod</a></code> | <code>string</code> | A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.certificateAuthority">CertificateAuthority</a></code> | <code>string</code> | The Certificate Authority that will issue the certificate Available values: "digicert", "google", "lets_encrypt", "ssl_com". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.cloudflareBranding">CloudflareBranding</a></code> | <code>object</code> | Whether or not to add Cloudflare Branding for the order. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertBundle">CustomCertBundle</a></code> | <code>object</code> | Array of custom certificate and key pairs (1 or 2 pairs allowed). |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertificate">CustomCertificate</a></code> | <code>string</code> | If a custom uploaded certificate is used. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customKey">CustomKey</a></code> | <code>string</code> | The key for a custom uploaded certificate. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.method">Method</a></code> | <code>string</code> | Domain control validation (DCV) method used for this hostname. Available values: "http", "txt", "email". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a></code> | SSL specific settings. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.type">Type</a></code> | <code>string</code> | Level of validation to be used for this hostname. Domain validation (dv) must be used. Available values: "dv". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.wildcard">Wildcard</a></code> | <code>object</code> | Indicates whether the certificate covers a wildcard. |

---

##### `BundleMethod`<sup>Optional</sup> <a name="BundleMethod" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.bundleMethod"></a>

```csharp
public string BundleMethod { get; set; }
```

- *Type:* string

A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores.

An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.
Available values: "ubiquitous", "optimal", "force".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#bundle_method CustomHostname#bundle_method}

---

##### `CertificateAuthority`<sup>Optional</sup> <a name="CertificateAuthority" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.certificateAuthority"></a>

```csharp
public string CertificateAuthority { get; set; }
```

- *Type:* string

The Certificate Authority that will issue the certificate Available values: "digicert", "google", "lets_encrypt", "ssl_com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#certificate_authority CustomHostname#certificate_authority}

---

##### `CloudflareBranding`<sup>Optional</sup> <a name="CloudflareBranding" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.cloudflareBranding"></a>

```csharp
public object CloudflareBranding { get; set; }
```

- *Type:* object

Whether or not to add Cloudflare Branding for the order.

This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#cloudflare_branding CustomHostname#cloudflare_branding}

---

##### `CustomCertBundle`<sup>Optional</sup> <a name="CustomCertBundle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertBundle"></a>

```csharp
public object CustomCertBundle { get; set; }
```

- *Type:* object

Array of custom certificate and key pairs (1 or 2 pairs allowed).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#custom_cert_bundle CustomHostname#custom_cert_bundle}

---

##### `CustomCertificate`<sup>Optional</sup> <a name="CustomCertificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customCertificate"></a>

```csharp
public string CustomCertificate { get; set; }
```

- *Type:* string

If a custom uploaded certificate is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#custom_certificate CustomHostname#custom_certificate}

---

##### `CustomKey`<sup>Optional</sup> <a name="CustomKey" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.customKey"></a>

```csharp
public string CustomKey { get; set; }
```

- *Type:* string

The key for a custom uploaded certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#custom_key CustomHostname#custom_key}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Domain control validation (DCV) method used for this hostname. Available values: "http", "txt", "email".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#method CustomHostname#method}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.settings"></a>

```csharp
public CustomHostnameSslSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>

SSL specific settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#settings CustomHostname#settings}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Level of validation to be used for this hostname. Domain validation (dv) must be used. Available values: "dv".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#type CustomHostname#type}

---

##### `Wildcard`<sup>Optional</sup> <a name="Wildcard" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSsl.property.wildcard"></a>

```csharp
public object Wildcard { get; set; }
```

- *Type:* object

Indicates whether the certificate covers a wildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#wildcard CustomHostname#wildcard}

---

### CustomHostnameSslCustomCertBundle <a name="CustomHostnameSslCustomCertBundle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CustomHostnameSslCustomCertBundle {
    string CustomCertificate,
    string CustomKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.property.customCertificate">CustomCertificate</a></code> | <code>string</code> | If a custom uploaded certificate is used. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.property.customKey">CustomKey</a></code> | <code>string</code> | The key for a custom uploaded certificate. |

---

##### `CustomCertificate`<sup>Required</sup> <a name="CustomCertificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.property.customCertificate"></a>

```csharp
public string CustomCertificate { get; set; }
```

- *Type:* string

If a custom uploaded certificate is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#custom_certificate CustomHostname#custom_certificate}

---

##### `CustomKey`<sup>Required</sup> <a name="CustomKey" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundle.property.customKey"></a>

```csharp
public string CustomKey { get; set; }
```

- *Type:* string

The key for a custom uploaded certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#custom_key CustomHostname#custom_key}

---

### CustomHostnameSslSettings <a name="CustomHostnameSslSettings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CustomHostnameSslSettings {
    string[] Ciphers = null,
    string EarlyHints = null,
    string Http2 = null,
    string MinTlsVersion = null,
    string Tls13 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.ciphers">Ciphers</a></code> | <code>string[]</code> | An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.earlyHints">EarlyHints</a></code> | <code>string</code> | Whether or not Early Hints is enabled. Available values: "on", "off". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.http2">Http2</a></code> | <code>string</code> | Whether or not HTTP2 is enabled. Available values: "on", "off". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | The minimum TLS version supported. Available values: "1.0", "1.1", "1.2", "1.3". |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.tls13">Tls13</a></code> | <code>string</code> | Whether or not TLS 1.3 is enabled. Available values: "on", "off". |

---

##### `Ciphers`<sup>Optional</sup> <a name="Ciphers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.ciphers"></a>

```csharp
public string[] Ciphers { get; set; }
```

- *Type:* string[]

An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#ciphers CustomHostname#ciphers}

---

##### `EarlyHints`<sup>Optional</sup> <a name="EarlyHints" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.earlyHints"></a>

```csharp
public string EarlyHints { get; set; }
```

- *Type:* string

Whether or not Early Hints is enabled. Available values: "on", "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#early_hints CustomHostname#early_hints}

---

##### `Http2`<sup>Optional</sup> <a name="Http2" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.http2"></a>

```csharp
public string Http2 { get; set; }
```

- *Type:* string

Whether or not HTTP2 is enabled. Available values: "on", "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#http2 CustomHostname#http2}

---

##### `MinTlsVersion`<sup>Optional</sup> <a name="MinTlsVersion" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; set; }
```

- *Type:* string

The minimum TLS version supported. Available values: "1.0", "1.1", "1.2", "1.3".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#min_tls_version CustomHostname#min_tls_version}

---

##### `Tls13`<sup>Optional</sup> <a name="Tls13" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings.property.tls13"></a>

```csharp
public string Tls13 { get; set; }
```

- *Type:* string

Whether or not TLS 1.3 is enabled. Available values: "on", "off".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/custom_hostname#tls_1_3 CustomHostname#tls_1_3}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomHostnameOwnershipVerificationHttpOutputReference <a name="CustomHostnameOwnershipVerificationHttpOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CustomHostnameOwnershipVerificationHttpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.httpBody">HttpBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.httpUrl">HttpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttp">CustomHostnameOwnershipVerificationHttp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpBody`<sup>Required</sup> <a name="HttpBody" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.httpBody"></a>

```csharp
public string HttpBody { get; }
```

- *Type:* string

---

##### `HttpUrl`<sup>Required</sup> <a name="HttpUrl" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.httpUrl"></a>

```csharp
public string HttpUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttpOutputReference.property.internalValue"></a>

```csharp
public CustomHostnameOwnershipVerificationHttp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationHttp">CustomHostnameOwnershipVerificationHttp</a>

---


### CustomHostnameOwnershipVerificationOutputReference <a name="CustomHostnameOwnershipVerificationOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CustomHostnameOwnershipVerificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerification">CustomHostnameOwnershipVerification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerificationOutputReference.property.internalValue"></a>

```csharp
public CustomHostnameOwnershipVerification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameOwnershipVerification">CustomHostnameOwnershipVerification</a>

---


### CustomHostnameSslCustomCertBundleList <a name="CustomHostnameSslCustomCertBundleList" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CustomHostnameSslCustomCertBundleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.get"></a>

```csharp
private CustomHostnameSslCustomCertBundleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CustomHostnameSslCustomCertBundleOutputReference <a name="CustomHostnameSslCustomCertBundleOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CustomHostnameSslCustomCertBundleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customCertificateInput">CustomCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customKeyInput">CustomKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customCertificate">CustomCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customKey">CustomKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomCertificateInput`<sup>Optional</sup> <a name="CustomCertificateInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customCertificateInput"></a>

```csharp
public string CustomCertificateInput { get; }
```

- *Type:* string

---

##### `CustomKeyInput`<sup>Optional</sup> <a name="CustomKeyInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customKeyInput"></a>

```csharp
public string CustomKeyInput { get; }
```

- *Type:* string

---

##### `CustomCertificate`<sup>Required</sup> <a name="CustomCertificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customCertificate"></a>

```csharp
public string CustomCertificate { get; }
```

- *Type:* string

---

##### `CustomKey`<sup>Required</sup> <a name="CustomKey" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.customKey"></a>

```csharp
public string CustomKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CustomHostnameSslOutputReference <a name="CustomHostnameSslOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CustomHostnameSslOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putCustomCertBundle">PutCustomCertBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetBundleMethod">ResetBundleMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCertificateAuthority">ResetCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCloudflareBranding">ResetCloudflareBranding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertBundle">ResetCustomCertBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertificate">ResetCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomKey">ResetCustomKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetWildcard">ResetWildcard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomCertBundle` <a name="PutCustomCertBundle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putCustomCertBundle"></a>

```csharp
private void PutCustomCertBundle(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putCustomCertBundle.parameter.value"></a>

- *Type:* object

---

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings"></a>

```csharp
private void PutSettings(CustomHostnameSslSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettings">CustomHostnameSslSettings</a>

---

##### `ResetBundleMethod` <a name="ResetBundleMethod" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetBundleMethod"></a>

```csharp
private void ResetBundleMethod()
```

##### `ResetCertificateAuthority` <a name="ResetCertificateAuthority" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCertificateAuthority"></a>

```csharp
private void ResetCertificateAuthority()
```

##### `ResetCloudflareBranding` <a name="ResetCloudflareBranding" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCloudflareBranding"></a>

```csharp
private void ResetCloudflareBranding()
```

##### `ResetCustomCertBundle` <a name="ResetCustomCertBundle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertBundle"></a>

```csharp
private void ResetCustomCertBundle()
```

##### `ResetCustomCertificate` <a name="ResetCustomCertificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomCertificate"></a>

```csharp
private void ResetCustomCertificate()
```

##### `ResetCustomKey` <a name="ResetCustomKey" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetCustomKey"></a>

```csharp
private void ResetCustomKey()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetSettings"></a>

```csharp
private void ResetSettings()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetWildcard` <a name="ResetWildcard" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.resetWildcard"></a>

```csharp
private void ResetWildcard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertBundle">CustomCertBundle</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList">CustomHostnameSslCustomCertBundleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference">CustomHostnameSslSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.bundleMethodInput">BundleMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthorityInput">CertificateAuthorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.cloudflareBrandingInput">CloudflareBrandingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertBundleInput">CustomCertBundleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificateInput">CustomCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKeyInput">CustomKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settingsInput">SettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcardInput">WildcardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.bundleMethod">BundleMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthority">CertificateAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.cloudflareBranding">CloudflareBranding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificate">CustomCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKey">CustomKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcard">Wildcard</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomCertBundle`<sup>Required</sup> <a name="CustomCertBundle" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertBundle"></a>

```csharp
public CustomHostnameSslCustomCertBundleList CustomCertBundle { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslCustomCertBundleList">CustomHostnameSslCustomCertBundleList</a>

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settings"></a>

```csharp
public CustomHostnameSslSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference">CustomHostnameSslSettingsOutputReference</a>

---

##### `BundleMethodInput`<sup>Optional</sup> <a name="BundleMethodInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.bundleMethodInput"></a>

```csharp
public string BundleMethodInput { get; }
```

- *Type:* string

---

##### `CertificateAuthorityInput`<sup>Optional</sup> <a name="CertificateAuthorityInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthorityInput"></a>

```csharp
public string CertificateAuthorityInput { get; }
```

- *Type:* string

---

##### `CloudflareBrandingInput`<sup>Optional</sup> <a name="CloudflareBrandingInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.cloudflareBrandingInput"></a>

```csharp
public object CloudflareBrandingInput { get; }
```

- *Type:* object

---

##### `CustomCertBundleInput`<sup>Optional</sup> <a name="CustomCertBundleInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertBundleInput"></a>

```csharp
public object CustomCertBundleInput { get; }
```

- *Type:* object

---

##### `CustomCertificateInput`<sup>Optional</sup> <a name="CustomCertificateInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificateInput"></a>

```csharp
public string CustomCertificateInput { get; }
```

- *Type:* string

---

##### `CustomKeyInput`<sup>Optional</sup> <a name="CustomKeyInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKeyInput"></a>

```csharp
public string CustomKeyInput { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.settingsInput"></a>

```csharp
public object SettingsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `WildcardInput`<sup>Optional</sup> <a name="WildcardInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcardInput"></a>

```csharp
public object WildcardInput { get; }
```

- *Type:* object

---

##### `BundleMethod`<sup>Required</sup> <a name="BundleMethod" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.bundleMethod"></a>

```csharp
public string BundleMethod { get; }
```

- *Type:* string

---

##### `CertificateAuthority`<sup>Required</sup> <a name="CertificateAuthority" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.certificateAuthority"></a>

```csharp
public string CertificateAuthority { get; }
```

- *Type:* string

---

##### `CloudflareBranding`<sup>Required</sup> <a name="CloudflareBranding" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.cloudflareBranding"></a>

```csharp
public object CloudflareBranding { get; }
```

- *Type:* object

---

##### `CustomCertificate`<sup>Required</sup> <a name="CustomCertificate" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customCertificate"></a>

```csharp
public string CustomCertificate { get; }
```

- *Type:* string

---

##### `CustomKey`<sup>Required</sup> <a name="CustomKey" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.customKey"></a>

```csharp
public string CustomKey { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Wildcard`<sup>Required</sup> <a name="Wildcard" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.wildcard"></a>

```csharp
public object Wildcard { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CustomHostnameSslSettingsOutputReference <a name="CustomHostnameSslSettingsOutputReference" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new CustomHostnameSslSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetCiphers">ResetCiphers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetEarlyHints">ResetEarlyHints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetHttp2">ResetHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetMinTlsVersion">ResetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetTls13">ResetTls13</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCiphers` <a name="ResetCiphers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetCiphers"></a>

```csharp
private void ResetCiphers()
```

##### `ResetEarlyHints` <a name="ResetEarlyHints" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetEarlyHints"></a>

```csharp
private void ResetEarlyHints()
```

##### `ResetHttp2` <a name="ResetHttp2" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetHttp2"></a>

```csharp
private void ResetHttp2()
```

##### `ResetMinTlsVersion` <a name="ResetMinTlsVersion" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetMinTlsVersion"></a>

```csharp
private void ResetMinTlsVersion()
```

##### `ResetTls13` <a name="ResetTls13" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.resetTls13"></a>

```csharp
private void ResetTls13()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphersInput">CiphersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHintsInput">EarlyHintsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2Input">Http2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersionInput">MinTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13Input">Tls13Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphers">Ciphers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHints">EarlyHints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2">Http2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13">Tls13</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CiphersInput`<sup>Optional</sup> <a name="CiphersInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphersInput"></a>

```csharp
public string[] CiphersInput { get; }
```

- *Type:* string[]

---

##### `EarlyHintsInput`<sup>Optional</sup> <a name="EarlyHintsInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHintsInput"></a>

```csharp
public string EarlyHintsInput { get; }
```

- *Type:* string

---

##### `Http2Input`<sup>Optional</sup> <a name="Http2Input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2Input"></a>

```csharp
public string Http2Input { get; }
```

- *Type:* string

---

##### `MinTlsVersionInput`<sup>Optional</sup> <a name="MinTlsVersionInput" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersionInput"></a>

```csharp
public string MinTlsVersionInput { get; }
```

- *Type:* string

---

##### `Tls13Input`<sup>Optional</sup> <a name="Tls13Input" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13Input"></a>

```csharp
public string Tls13Input { get; }
```

- *Type:* string

---

##### `Ciphers`<sup>Required</sup> <a name="Ciphers" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.ciphers"></a>

```csharp
public string[] Ciphers { get; }
```

- *Type:* string[]

---

##### `EarlyHints`<sup>Required</sup> <a name="EarlyHints" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.earlyHints"></a>

```csharp
public string EarlyHints { get; }
```

- *Type:* string

---

##### `Http2`<sup>Required</sup> <a name="Http2" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.http2"></a>

```csharp
public string Http2 { get; }
```

- *Type:* string

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; }
```

- *Type:* string

---

##### `Tls13`<sup>Required</sup> <a name="Tls13" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.tls13"></a>

```csharp
public string Tls13 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.customHostname.CustomHostnameSslSettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



