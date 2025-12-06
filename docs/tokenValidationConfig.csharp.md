# `tokenValidationConfig` Submodule <a name="`tokenValidationConfig` Submodule" id="@cdktf/provider-cloudflare.tokenValidationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TokenValidationConfig <a name="TokenValidationConfig" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config cloudflare_token_validation_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TokenValidationConfig(Construct Scope, string Id, TokenValidationConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig">TokenValidationConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig">TokenValidationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.putCredentials">PutCredentials</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCredentials` <a name="PutCredentials" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.putCredentials"></a>

```csharp
private void PutCredentials(TokenValidationConfigCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials">TokenValidationConfigCredentials</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TokenValidationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TokenValidationConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TokenValidationConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TokenValidationConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TokenValidationConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TokenValidationConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TokenValidationConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TokenValidationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TokenValidationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.credentials">Credentials</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference">TokenValidationConfigCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.lastUpdated">LastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.credentialsInput">CredentialsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials">TokenValidationConfigCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tokenSourcesInput">TokenSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tokenSources">TokenSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.credentials"></a>

```csharp
public TokenValidationConfigCredentialsOutputReference Credentials { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference">TokenValidationConfigCredentialsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.lastUpdated"></a>

```csharp
public string LastUpdated { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.credentialsInput"></a>

```csharp
public IResolvable|TokenValidationConfigCredentials CredentialsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials">TokenValidationConfigCredentials</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `TokenSourcesInput`<sup>Optional</sup> <a name="TokenSourcesInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tokenSourcesInput"></a>

```csharp
public string[] TokenSourcesInput { get; }
```

- *Type:* string[]

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `TokenSources`<sup>Required</sup> <a name="TokenSources" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tokenSources"></a>

```csharp
public string[] TokenSources { get; }
```

- *Type:* string[]

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TokenValidationConfigConfig <a name="TokenValidationConfigConfig" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TokenValidationConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    TokenValidationConfigCredentials Credentials,
    string Description,
    string Title,
    string[] TokenSources,
    string TokenType,
    string ZoneId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.credentials">Credentials</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials">TokenValidationConfigCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#credentials TokenValidationConfig#credentials}. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#description TokenValidationConfig#description}. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#title TokenValidationConfig#title}. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.tokenSources">TokenSources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#token_sources TokenValidationConfig#token_sources}. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.tokenType">TokenType</a></code> | <code>string</code> | Available values: "JWT". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.credentials"></a>

```csharp
public TokenValidationConfigCredentials Credentials { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials">TokenValidationConfigCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#credentials TokenValidationConfig#credentials}.

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#description TokenValidationConfig#description}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#title TokenValidationConfig#title}.

---

##### `TokenSources`<sup>Required</sup> <a name="TokenSources" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.tokenSources"></a>

```csharp
public string[] TokenSources { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#token_sources TokenValidationConfig#token_sources}.

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

Available values: "JWT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#token_type TokenValidationConfig#token_type}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#zone_id TokenValidationConfig#zone_id}

---

### TokenValidationConfigCredentials <a name="TokenValidationConfigCredentials" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TokenValidationConfigCredentials {
    IResolvable|TokenValidationConfigCredentialsKeys[] Keys
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials.property.keys">Keys</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#keys TokenValidationConfig#keys}. |

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials.property.keys"></a>

```csharp
public IResolvable|TokenValidationConfigCredentialsKeys[] Keys { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#keys TokenValidationConfig#keys}.

---

### TokenValidationConfigCredentialsKeys <a name="TokenValidationConfigCredentialsKeys" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TokenValidationConfigCredentialsKeys {
    string Alg,
    string Kid,
    string Kty,
    string Crv = null,
    string E = null,
    string N = null,
    string X = null,
    string Y = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.alg">Alg</a></code> | <code>string</code> | Algorithm Available values: "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.kid">Kid</a></code> | <code>string</code> | Key ID. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.kty">Kty</a></code> | <code>string</code> | Key Type Available values: "RSA", "EC". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.crv">Crv</a></code> | <code>string</code> | Curve Available values: "P-256", "P-384". |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.e">E</a></code> | <code>string</code> | RSA exponent. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.n">N</a></code> | <code>string</code> | RSA modulus. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.x">X</a></code> | <code>string</code> | X EC coordinate. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.y">Y</a></code> | <code>string</code> | Y EC coordinate. |

---

##### `Alg`<sup>Required</sup> <a name="Alg" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.alg"></a>

```csharp
public string Alg { get; set; }
```

- *Type:* string

Algorithm Available values: "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#alg TokenValidationConfig#alg}

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.kid"></a>

```csharp
public string Kid { get; set; }
```

- *Type:* string

Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#kid TokenValidationConfig#kid}

---

##### `Kty`<sup>Required</sup> <a name="Kty" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.kty"></a>

```csharp
public string Kty { get; set; }
```

- *Type:* string

Key Type Available values: "RSA", "EC".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#kty TokenValidationConfig#kty}

---

##### `Crv`<sup>Optional</sup> <a name="Crv" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.crv"></a>

```csharp
public string Crv { get; set; }
```

- *Type:* string

Curve Available values: "P-256", "P-384".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#crv TokenValidationConfig#crv}

---

##### `E`<sup>Optional</sup> <a name="E" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.e"></a>

```csharp
public string E { get; set; }
```

- *Type:* string

RSA exponent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#e TokenValidationConfig#e}

---

##### `N`<sup>Optional</sup> <a name="N" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.n"></a>

```csharp
public string N { get; set; }
```

- *Type:* string

RSA modulus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#n TokenValidationConfig#n}

---

##### `X`<sup>Optional</sup> <a name="X" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.x"></a>

```csharp
public string X { get; set; }
```

- *Type:* string

X EC coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#x TokenValidationConfig#x}

---

##### `Y`<sup>Optional</sup> <a name="Y" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys.property.y"></a>

```csharp
public string Y { get; set; }
```

- *Type:* string

Y EC coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/token_validation_config#y TokenValidationConfig#y}

---

## Classes <a name="Classes" id="Classes"></a>

### TokenValidationConfigCredentialsKeysList <a name="TokenValidationConfigCredentialsKeysList" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TokenValidationConfigCredentialsKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.get"></a>

```csharp
private TokenValidationConfigCredentialsKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList.property.internalValue"></a>

```csharp
public IResolvable|TokenValidationConfigCredentialsKeys[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a>[]

---


### TokenValidationConfigCredentialsKeysOutputReference <a name="TokenValidationConfigCredentialsKeysOutputReference" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TokenValidationConfigCredentialsKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetCrv">ResetCrv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetE">ResetE</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetN">ResetN</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetX">ResetX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetY">ResetY</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrv` <a name="ResetCrv" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetCrv"></a>

```csharp
private void ResetCrv()
```

##### `ResetE` <a name="ResetE" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetE"></a>

```csharp
private void ResetE()
```

##### `ResetN` <a name="ResetN" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetN"></a>

```csharp
private void ResetN()
```

##### `ResetX` <a name="ResetX" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetX"></a>

```csharp
private void ResetX()
```

##### `ResetY` <a name="ResetY" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.resetY"></a>

```csharp
private void ResetY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.algInput">AlgInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.crvInput">CrvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.eInput">EInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.kidInput">KidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.ktyInput">KtyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.nInput">NInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.xInput">XInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.yInput">YInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.alg">Alg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.crv">Crv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.e">E</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.kid">Kid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.kty">Kty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.n">N</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.x">X</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.y">Y</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgInput`<sup>Optional</sup> <a name="AlgInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.algInput"></a>

```csharp
public string AlgInput { get; }
```

- *Type:* string

---

##### `CrvInput`<sup>Optional</sup> <a name="CrvInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.crvInput"></a>

```csharp
public string CrvInput { get; }
```

- *Type:* string

---

##### `EInput`<sup>Optional</sup> <a name="EInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.eInput"></a>

```csharp
public string EInput { get; }
```

- *Type:* string

---

##### `KidInput`<sup>Optional</sup> <a name="KidInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.kidInput"></a>

```csharp
public string KidInput { get; }
```

- *Type:* string

---

##### `KtyInput`<sup>Optional</sup> <a name="KtyInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.ktyInput"></a>

```csharp
public string KtyInput { get; }
```

- *Type:* string

---

##### `NInput`<sup>Optional</sup> <a name="NInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.nInput"></a>

```csharp
public string NInput { get; }
```

- *Type:* string

---

##### `XInput`<sup>Optional</sup> <a name="XInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.xInput"></a>

```csharp
public string XInput { get; }
```

- *Type:* string

---

##### `YInput`<sup>Optional</sup> <a name="YInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.yInput"></a>

```csharp
public string YInput { get; }
```

- *Type:* string

---

##### `Alg`<sup>Required</sup> <a name="Alg" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.alg"></a>

```csharp
public string Alg { get; }
```

- *Type:* string

---

##### `Crv`<sup>Required</sup> <a name="Crv" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.crv"></a>

```csharp
public string Crv { get; }
```

- *Type:* string

---

##### `E`<sup>Required</sup> <a name="E" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.e"></a>

```csharp
public string E { get; }
```

- *Type:* string

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.kid"></a>

```csharp
public string Kid { get; }
```

- *Type:* string

---

##### `Kty`<sup>Required</sup> <a name="Kty" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.kty"></a>

```csharp
public string Kty { get; }
```

- *Type:* string

---

##### `N`<sup>Required</sup> <a name="N" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.n"></a>

```csharp
public string N { get; }
```

- *Type:* string

---

##### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.x"></a>

```csharp
public string X { get; }
```

- *Type:* string

---

##### `Y`<sup>Required</sup> <a name="Y" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.y"></a>

```csharp
public string Y { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TokenValidationConfigCredentialsKeys InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a>

---


### TokenValidationConfigCredentialsOutputReference <a name="TokenValidationConfigCredentialsOutputReference" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TokenValidationConfigCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.putKeys">PutKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKeys` <a name="PutKeys" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.putKeys"></a>

```csharp
private void PutKeys(IResolvable|TokenValidationConfigCredentialsKeys[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.putKeys.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.keys">Keys</a></code> | <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList">TokenValidationConfigCredentialsKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.keysInput">KeysInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials">TokenValidationConfigCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.keys"></a>

```csharp
public TokenValidationConfigCredentialsKeysList Keys { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeysList">TokenValidationConfigCredentialsKeysList</a>

---

##### `KeysInput`<sup>Optional</sup> <a name="KeysInput" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.keysInput"></a>

```csharp
public IResolvable|TokenValidationConfigCredentialsKeys[] KeysInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsKeys">TokenValidationConfigCredentialsKeys</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentialsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TokenValidationConfigCredentials InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.tokenValidationConfig.TokenValidationConfigCredentials">TokenValidationConfigCredentials</a>

---



