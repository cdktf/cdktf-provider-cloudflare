# `dnsRecord` Submodule <a name="`dnsRecord` Submodule" id="@cdktf/provider-cloudflare.dnsRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsRecord <a name="DnsRecord" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record cloudflare_dns_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsRecord(Construct Scope, string Id, DnsRecordConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig">DnsRecordConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig">DnsRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData">PutData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetProxied">ResetProxied</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutData` <a name="PutData" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData"></a>

```csharp
private void PutData(DnsRecordData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>

---

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putSettings"></a>

```csharp
private void PutSettings(DnsRecordSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetData` <a name="ResetData" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProxied` <a name="ResetProxied" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetProxied"></a>

```csharp
private void ResetProxied()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetSettings"></a>

```csharp
private void ResetSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DnsRecord.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DnsRecord.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DnsRecord.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DnsRecord.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsRecord to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DnsRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentModifiedOn">CommentModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.data">Data</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference">DnsRecordDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.meta">Meta</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiable">Proxiable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference">DnsRecordSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsModifiedOn">TagsModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dataInput">DataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiedInput">ProxiedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settingsInput">SettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxied">Proxied</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CommentModifiedOn`<sup>Required</sup> <a name="CommentModifiedOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentModifiedOn"></a>

```csharp
public string CommentModifiedOn { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.data"></a>

```csharp
public DnsRecordDataOutputReference Data { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference">DnsRecordDataOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.meta"></a>

```csharp
public string Meta { get; }
```

- *Type:* string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `Proxiable`<sup>Required</sup> <a name="Proxiable" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiable"></a>

```csharp
public IResolvable Proxiable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settings"></a>

```csharp
public DnsRecordSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference">DnsRecordSettingsOutputReference</a>

---

##### `TagsModifiedOn`<sup>Required</sup> <a name="TagsModifiedOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsModifiedOn"></a>

```csharp
public string TagsModifiedOn { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.dataInput"></a>

```csharp
public object DataInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProxiedInput`<sup>Optional</sup> <a name="ProxiedInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxiedInput"></a>

```csharp
public object ProxiedInput { get; }
```

- *Type:* object

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.settingsInput"></a>

```csharp
public object SettingsInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Proxied`<sup>Required</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.proxied"></a>

```csharp
public object Proxied { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecord.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsRecordConfig <a name="DnsRecordConfig" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsRecordConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    double Ttl,
    string Type,
    string ZoneId,
    string Comment = null,
    string Content = null,
    DnsRecordData Data = null,
    double Priority = null,
    object Proxied = null,
    DnsRecordSettings Settings = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.name">Name</a></code> | <code>string</code> | DNS record name (or @ for the zone apex) in Punycode. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.ttl">Ttl</a></code> | <code>double</code> | Time To Live (TTL) of the DNS record in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.type">Type</a></code> | <code>string</code> | Record type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.comment">Comment</a></code> | <code>string</code> | Comments or notes about the DNS record. This field has no effect on DNS responses. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.content">Content</a></code> | <code>string</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.data">Data</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a></code> | Components of a CAA record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.priority">Priority</a></code> | <code>double</code> | Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.proxied">Proxied</a></code> | <code>object</code> | Whether the record is receiving the performance and security benefits of Cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a></code> | Settings for the DNS record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.tags">Tags</a></code> | <code>string[]</code> | Custom tags for the DNS record. This field has no effect on DNS responses. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

DNS record name (or @ for the zone apex) in Punycode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#name DnsRecord#name}

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

Time To Live (TTL) of the DNS record in seconds.

Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#ttl DnsRecord#ttl}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Record type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#type DnsRecord#type}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#zone_id DnsRecord#zone_id}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Comments or notes about the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#comment DnsRecord#comment}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#content DnsRecord#content}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.data"></a>

```csharp
public DnsRecordData Data { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData">DnsRecordData</a>

Components of a CAA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#data DnsRecord#data}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#priority DnsRecord#priority}

---

##### `Proxied`<sup>Optional</sup> <a name="Proxied" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.proxied"></a>

```csharp
public object Proxied { get; set; }
```

- *Type:* object

Whether the record is receiving the performance and security benefits of Cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#proxied DnsRecord#proxied}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.settings"></a>

```csharp
public DnsRecordSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings">DnsRecordSettings</a>

Settings for the DNS record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#settings DnsRecord#settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Custom tags for the DNS record. This field has no effect on DNS responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#tags DnsRecord#tags}

---

### DnsRecordData <a name="DnsRecordData" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsRecordData {
    double Algorithm = null,
    double Altitude = null,
    string Certificate = null,
    string Digest = null,
    double DigestType = null,
    string Fingerprint = null,
    System.Collections.Generic.IDictionary<string, object> Flags = null,
    double KeyTag = null,
    double LatDegrees = null,
    string LatDirection = null,
    double LatMinutes = null,
    double LatSeconds = null,
    double LongDegrees = null,
    string LongDirection = null,
    double LongMinutes = null,
    double LongSeconds = null,
    double MatchingType = null,
    double Order = null,
    double Port = null,
    double PrecisionHorz = null,
    double PrecisionVert = null,
    double Preference = null,
    double Priority = null,
    double Protocol = null,
    string PublicKey = null,
    string Regex = null,
    string Replacement = null,
    double Selector = null,
    string Service = null,
    double Size = null,
    string Tag = null,
    string Target = null,
    double Type = null,
    double Usage = null,
    string Value = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.algorithm">Algorithm</a></code> | <code>double</code> | Algorithm. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.altitude">Altitude</a></code> | <code>double</code> | Altitude of location in meters. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.certificate">Certificate</a></code> | <code>string</code> | Certificate. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digest">Digest</a></code> | <code>string</code> | Digest. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digestType">DigestType</a></code> | <code>double</code> | Digest Type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.fingerprint">Fingerprint</a></code> | <code>string</code> | fingerprint. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.flags">Flags</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | Flags for the CAA record. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.keyTag">KeyTag</a></code> | <code>double</code> | Key Tag. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDegrees">LatDegrees</a></code> | <code>double</code> | Degrees of latitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDirection">LatDirection</a></code> | <code>string</code> | Latitude direction. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latMinutes">LatMinutes</a></code> | <code>double</code> | Minutes of latitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latSeconds">LatSeconds</a></code> | <code>double</code> | Seconds of latitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDegrees">LongDegrees</a></code> | <code>double</code> | Degrees of longitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDirection">LongDirection</a></code> | <code>string</code> | Longitude direction. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longMinutes">LongMinutes</a></code> | <code>double</code> | Minutes of longitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longSeconds">LongSeconds</a></code> | <code>double</code> | Seconds of longitude. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.matchingType">MatchingType</a></code> | <code>double</code> | Matching Type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.order">Order</a></code> | <code>double</code> | Order. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.port">Port</a></code> | <code>double</code> | The port of the service. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionHorz">PrecisionHorz</a></code> | <code>double</code> | Horizontal precision of location. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionVert">PrecisionVert</a></code> | <code>double</code> | Vertical precision of location. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.preference">Preference</a></code> | <code>double</code> | Preference. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.priority">Priority</a></code> | <code>double</code> | priority. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.protocol">Protocol</a></code> | <code>double</code> | Protocol. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.publicKey">PublicKey</a></code> | <code>string</code> | Public Key. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.regex">Regex</a></code> | <code>string</code> | Regex. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.replacement">Replacement</a></code> | <code>string</code> | Replacement. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.selector">Selector</a></code> | <code>double</code> | Selector. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.service">Service</a></code> | <code>string</code> | Service. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.size">Size</a></code> | <code>double</code> | Size of location in meters. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.tag">Tag</a></code> | <code>string</code> | Name of the property controlled by this record (e.g.: issue, issuewild, iodef). |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.target">Target</a></code> | <code>string</code> | target. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.type">Type</a></code> | <code>double</code> | Type. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.usage">Usage</a></code> | <code>double</code> | Usage. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.value">Value</a></code> | <code>string</code> | Value of the record. This field's semantics depend on the chosen tag. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.weight">Weight</a></code> | <code>double</code> | The record weight. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.algorithm"></a>

```csharp
public double Algorithm { get; set; }
```

- *Type:* double

Algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#algorithm DnsRecord#algorithm}

---

##### `Altitude`<sup>Optional</sup> <a name="Altitude" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.altitude"></a>

```csharp
public double Altitude { get; set; }
```

- *Type:* double

Altitude of location in meters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#altitude DnsRecord#altitude}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#certificate DnsRecord#certificate}

---

##### `Digest`<sup>Optional</sup> <a name="Digest" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digest"></a>

```csharp
public string Digest { get; set; }
```

- *Type:* string

Digest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#digest DnsRecord#digest}

---

##### `DigestType`<sup>Optional</sup> <a name="DigestType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.digestType"></a>

```csharp
public double DigestType { get; set; }
```

- *Type:* double

Digest Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#digest_type DnsRecord#digest_type}

---

##### `Fingerprint`<sup>Optional</sup> <a name="Fingerprint" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.fingerprint"></a>

```csharp
public string Fingerprint { get; set; }
```

- *Type:* string

fingerprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#fingerprint DnsRecord#fingerprint}

---

##### `Flags`<sup>Optional</sup> <a name="Flags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.flags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> Flags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

Flags for the CAA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#flags DnsRecord#flags}

---

##### `KeyTag`<sup>Optional</sup> <a name="KeyTag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.keyTag"></a>

```csharp
public double KeyTag { get; set; }
```

- *Type:* double

Key Tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#key_tag DnsRecord#key_tag}

---

##### `LatDegrees`<sup>Optional</sup> <a name="LatDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDegrees"></a>

```csharp
public double LatDegrees { get; set; }
```

- *Type:* double

Degrees of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#lat_degrees DnsRecord#lat_degrees}

---

##### `LatDirection`<sup>Optional</sup> <a name="LatDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latDirection"></a>

```csharp
public string LatDirection { get; set; }
```

- *Type:* string

Latitude direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#lat_direction DnsRecord#lat_direction}

---

##### `LatMinutes`<sup>Optional</sup> <a name="LatMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latMinutes"></a>

```csharp
public double LatMinutes { get; set; }
```

- *Type:* double

Minutes of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#lat_minutes DnsRecord#lat_minutes}

---

##### `LatSeconds`<sup>Optional</sup> <a name="LatSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.latSeconds"></a>

```csharp
public double LatSeconds { get; set; }
```

- *Type:* double

Seconds of latitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#lat_seconds DnsRecord#lat_seconds}

---

##### `LongDegrees`<sup>Optional</sup> <a name="LongDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDegrees"></a>

```csharp
public double LongDegrees { get; set; }
```

- *Type:* double

Degrees of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#long_degrees DnsRecord#long_degrees}

---

##### `LongDirection`<sup>Optional</sup> <a name="LongDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longDirection"></a>

```csharp
public string LongDirection { get; set; }
```

- *Type:* string

Longitude direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#long_direction DnsRecord#long_direction}

---

##### `LongMinutes`<sup>Optional</sup> <a name="LongMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longMinutes"></a>

```csharp
public double LongMinutes { get; set; }
```

- *Type:* double

Minutes of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#long_minutes DnsRecord#long_minutes}

---

##### `LongSeconds`<sup>Optional</sup> <a name="LongSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.longSeconds"></a>

```csharp
public double LongSeconds { get; set; }
```

- *Type:* double

Seconds of longitude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#long_seconds DnsRecord#long_seconds}

---

##### `MatchingType`<sup>Optional</sup> <a name="MatchingType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.matchingType"></a>

```csharp
public double MatchingType { get; set; }
```

- *Type:* double

Matching Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#matching_type DnsRecord#matching_type}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.order"></a>

```csharp
public double Order { get; set; }
```

- *Type:* double

Order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#order DnsRecord#order}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#port DnsRecord#port}

---

##### `PrecisionHorz`<sup>Optional</sup> <a name="PrecisionHorz" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionHorz"></a>

```csharp
public double PrecisionHorz { get; set; }
```

- *Type:* double

Horizontal precision of location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#precision_horz DnsRecord#precision_horz}

---

##### `PrecisionVert`<sup>Optional</sup> <a name="PrecisionVert" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.precisionVert"></a>

```csharp
public double PrecisionVert { get; set; }
```

- *Type:* double

Vertical precision of location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#precision_vert DnsRecord#precision_vert}

---

##### `Preference`<sup>Optional</sup> <a name="Preference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.preference"></a>

```csharp
public double Preference { get; set; }
```

- *Type:* double

Preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#preference DnsRecord#preference}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#priority DnsRecord#priority}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.protocol"></a>

```csharp
public double Protocol { get; set; }
```

- *Type:* double

Protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#protocol DnsRecord#protocol}

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Public Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#public_key DnsRecord#public_key}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#regex DnsRecord#regex}

---

##### `Replacement`<sup>Optional</sup> <a name="Replacement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.replacement"></a>

```csharp
public string Replacement { get; set; }
```

- *Type:* string

Replacement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#replacement DnsRecord#replacement}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.selector"></a>

```csharp
public double Selector { get; set; }
```

- *Type:* double

Selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#selector DnsRecord#selector}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#service DnsRecord#service}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Size of location in meters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#size DnsRecord#size}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

Name of the property controlled by this record (e.g.: issue, issuewild, iodef).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#tag DnsRecord#tag}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#target DnsRecord#target}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.type"></a>

```csharp
public double Type { get; set; }
```

- *Type:* double

Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#type DnsRecord#type}

---

##### `Usage`<sup>Optional</sup> <a name="Usage" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.usage"></a>

```csharp
public double Usage { get; set; }
```

- *Type:* double

Usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#usage DnsRecord#usage}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the record. This field's semantics depend on the chosen tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#value DnsRecord#value}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordData.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

The record weight.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#weight DnsRecord#weight}

---

### DnsRecordSettings <a name="DnsRecordSettings" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsRecordSettings {
    object FlattenCname = null,
    object Ipv4Only = null,
    object Ipv6Only = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.flattenCname">FlattenCname</a></code> | <code>object</code> | If enabled, causes the CNAME record to be resolved externally and the resulting address records (e.g., A and AAAA) to be returned instead of the CNAME record itself. This setting is unavailable for proxied records, since they are always flattened. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv4Only">Ipv4Only</a></code> | <code>object</code> | When enabled, only A records will be generated, and AAAA records will not be created. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv6Only">Ipv6Only</a></code> | <code>object</code> | When enabled, only AAAA records will be generated, and A records will not be created. |

---

##### `FlattenCname`<sup>Optional</sup> <a name="FlattenCname" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.flattenCname"></a>

```csharp
public object FlattenCname { get; set; }
```

- *Type:* object

If enabled, causes the CNAME record to be resolved externally and the resulting address records (e.g., A and AAAA) to be returned instead of the CNAME record itself. This setting is unavailable for proxied records, since they are always flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#flatten_cname DnsRecord#flatten_cname}

---

##### `Ipv4Only`<sup>Optional</sup> <a name="Ipv4Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv4Only"></a>

```csharp
public object Ipv4Only { get; set; }
```

- *Type:* object

When enabled, only A records will be generated, and AAAA records will not be created.

This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#ipv4_only DnsRecord#ipv4_only}

---

##### `Ipv6Only`<sup>Optional</sup> <a name="Ipv6Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettings.property.ipv6Only"></a>

```csharp
public object Ipv6Only { get; set; }
```

- *Type:* object

When enabled, only AAAA records will be generated, and A records will not be created.

This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/dns_record#ipv6_only DnsRecord#ipv6_only}

---

## Classes <a name="Classes" id="Classes"></a>

### DnsRecordDataOutputReference <a name="DnsRecordDataOutputReference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsRecordDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAltitude">ResetAltitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigest">ResetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigestType">ResetDigestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFingerprint">ResetFingerprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFlags">ResetFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetKeyTag">ResetKeyTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDegrees">ResetLatDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDirection">ResetLatDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatMinutes">ResetLatMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatSeconds">ResetLatSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDegrees">ResetLongDegrees</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDirection">ResetLongDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongMinutes">ResetLongMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongSeconds">ResetLongSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetMatchingType">ResetMatchingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionHorz">ResetPrecisionHorz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionVert">ResetPrecisionVert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPreference">ResetPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPublicKey">ResetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetReplacement">ResetReplacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetUsage">ResetUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetAltitude` <a name="ResetAltitude" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetAltitude"></a>

```csharp
private void ResetAltitude()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetDigest` <a name="ResetDigest" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigest"></a>

```csharp
private void ResetDigest()
```

##### `ResetDigestType` <a name="ResetDigestType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetDigestType"></a>

```csharp
private void ResetDigestType()
```

##### `ResetFingerprint` <a name="ResetFingerprint" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFingerprint"></a>

```csharp
private void ResetFingerprint()
```

##### `ResetFlags` <a name="ResetFlags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetFlags"></a>

```csharp
private void ResetFlags()
```

##### `ResetKeyTag` <a name="ResetKeyTag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetKeyTag"></a>

```csharp
private void ResetKeyTag()
```

##### `ResetLatDegrees` <a name="ResetLatDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDegrees"></a>

```csharp
private void ResetLatDegrees()
```

##### `ResetLatDirection` <a name="ResetLatDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatDirection"></a>

```csharp
private void ResetLatDirection()
```

##### `ResetLatMinutes` <a name="ResetLatMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatMinutes"></a>

```csharp
private void ResetLatMinutes()
```

##### `ResetLatSeconds` <a name="ResetLatSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLatSeconds"></a>

```csharp
private void ResetLatSeconds()
```

##### `ResetLongDegrees` <a name="ResetLongDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDegrees"></a>

```csharp
private void ResetLongDegrees()
```

##### `ResetLongDirection` <a name="ResetLongDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongDirection"></a>

```csharp
private void ResetLongDirection()
```

##### `ResetLongMinutes` <a name="ResetLongMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongMinutes"></a>

```csharp
private void ResetLongMinutes()
```

##### `ResetLongSeconds` <a name="ResetLongSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetLongSeconds"></a>

```csharp
private void ResetLongSeconds()
```

##### `ResetMatchingType` <a name="ResetMatchingType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetMatchingType"></a>

```csharp
private void ResetMatchingType()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPrecisionHorz` <a name="ResetPrecisionHorz" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionHorz"></a>

```csharp
private void ResetPrecisionHorz()
```

##### `ResetPrecisionVert` <a name="ResetPrecisionVert" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPrecisionVert"></a>

```csharp
private void ResetPrecisionVert()
```

##### `ResetPreference` <a name="ResetPreference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPreference"></a>

```csharp
private void ResetPreference()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetPublicKey"></a>

```csharp
private void ResetPublicKey()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```

##### `ResetReplacement` <a name="ResetReplacement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetReplacement"></a>

```csharp
private void ResetReplacement()
```

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSelector"></a>

```csharp
private void ResetSelector()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUsage` <a name="ResetUsage" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetUsage"></a>

```csharp
private void ResetUsage()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitudeInput">AltitudeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestInput">DigestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestTypeInput">DigestTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprintInput">FingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flagsInput">FlagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTagInput">KeyTagInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegreesInput">LatDegreesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirectionInput">LatDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutesInput">LatMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSecondsInput">LatSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegreesInput">LongDegreesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirectionInput">LongDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutesInput">LongMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSecondsInput">LongSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingTypeInput">MatchingTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.orderInput">OrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorzInput">PrecisionHorzInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVertInput">PrecisionVertInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preferenceInput">PreferenceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacementInput">ReplacementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selectorInput">SelectorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.typeInput">TypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usageInput">UsageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithm">Algorithm</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitude">Altitude</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digest">Digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestType">DigestType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flags">Flags</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTag">KeyTag</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegrees">LatDegrees</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirection">LatDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutes">LatMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSeconds">LatSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegrees">LongDegrees</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirection">LongDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutes">LongMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSeconds">LongSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingType">MatchingType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorz">PrecisionHorz</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVert">PrecisionVert</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preference">Preference</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocol">Protocol</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacement">Replacement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selector">Selector</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.type">Type</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usage">Usage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithmInput"></a>

```csharp
public double AlgorithmInput { get; }
```

- *Type:* double

---

##### `AltitudeInput`<sup>Optional</sup> <a name="AltitudeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitudeInput"></a>

```csharp
public double AltitudeInput { get; }
```

- *Type:* double

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `DigestInput`<sup>Optional</sup> <a name="DigestInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestInput"></a>

```csharp
public string DigestInput { get; }
```

- *Type:* string

---

##### `DigestTypeInput`<sup>Optional</sup> <a name="DigestTypeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestTypeInput"></a>

```csharp
public double DigestTypeInput { get; }
```

- *Type:* double

---

##### `FingerprintInput`<sup>Optional</sup> <a name="FingerprintInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprintInput"></a>

```csharp
public string FingerprintInput { get; }
```

- *Type:* string

---

##### `FlagsInput`<sup>Optional</sup> <a name="FlagsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> FlagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `KeyTagInput`<sup>Optional</sup> <a name="KeyTagInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTagInput"></a>

```csharp
public double KeyTagInput { get; }
```

- *Type:* double

---

##### `LatDegreesInput`<sup>Optional</sup> <a name="LatDegreesInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegreesInput"></a>

```csharp
public double LatDegreesInput { get; }
```

- *Type:* double

---

##### `LatDirectionInput`<sup>Optional</sup> <a name="LatDirectionInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirectionInput"></a>

```csharp
public string LatDirectionInput { get; }
```

- *Type:* string

---

##### `LatMinutesInput`<sup>Optional</sup> <a name="LatMinutesInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutesInput"></a>

```csharp
public double LatMinutesInput { get; }
```

- *Type:* double

---

##### `LatSecondsInput`<sup>Optional</sup> <a name="LatSecondsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSecondsInput"></a>

```csharp
public double LatSecondsInput { get; }
```

- *Type:* double

---

##### `LongDegreesInput`<sup>Optional</sup> <a name="LongDegreesInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegreesInput"></a>

```csharp
public double LongDegreesInput { get; }
```

- *Type:* double

---

##### `LongDirectionInput`<sup>Optional</sup> <a name="LongDirectionInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirectionInput"></a>

```csharp
public string LongDirectionInput { get; }
```

- *Type:* string

---

##### `LongMinutesInput`<sup>Optional</sup> <a name="LongMinutesInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutesInput"></a>

```csharp
public double LongMinutesInput { get; }
```

- *Type:* double

---

##### `LongSecondsInput`<sup>Optional</sup> <a name="LongSecondsInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSecondsInput"></a>

```csharp
public double LongSecondsInput { get; }
```

- *Type:* double

---

##### `MatchingTypeInput`<sup>Optional</sup> <a name="MatchingTypeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingTypeInput"></a>

```csharp
public double MatchingTypeInput { get; }
```

- *Type:* double

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.orderInput"></a>

```csharp
public double OrderInput { get; }
```

- *Type:* double

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PrecisionHorzInput`<sup>Optional</sup> <a name="PrecisionHorzInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorzInput"></a>

```csharp
public double PrecisionHorzInput { get; }
```

- *Type:* double

---

##### `PrecisionVertInput`<sup>Optional</sup> <a name="PrecisionVertInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVertInput"></a>

```csharp
public double PrecisionVertInput { get; }
```

- *Type:* double

---

##### `PreferenceInput`<sup>Optional</sup> <a name="PreferenceInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preferenceInput"></a>

```csharp
public double PreferenceInput { get; }
```

- *Type:* double

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocolInput"></a>

```csharp
public double ProtocolInput { get; }
```

- *Type:* double

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `ReplacementInput`<sup>Optional</sup> <a name="ReplacementInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacementInput"></a>

```csharp
public string ReplacementInput { get; }
```

- *Type:* string

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selectorInput"></a>

```csharp
public double SelectorInput { get; }
```

- *Type:* double

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.typeInput"></a>

```csharp
public double TypeInput { get; }
```

- *Type:* double

---

##### `UsageInput`<sup>Optional</sup> <a name="UsageInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usageInput"></a>

```csharp
public double UsageInput { get; }
```

- *Type:* double

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.algorithm"></a>

```csharp
public double Algorithm { get; }
```

- *Type:* double

---

##### `Altitude`<sup>Required</sup> <a name="Altitude" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.altitude"></a>

```csharp
public double Altitude { get; }
```

- *Type:* double

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digest"></a>

```csharp
public string Digest { get; }
```

- *Type:* string

---

##### `DigestType`<sup>Required</sup> <a name="DigestType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.digestType"></a>

```csharp
public double DigestType { get; }
```

- *Type:* double

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.flags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> Flags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `KeyTag`<sup>Required</sup> <a name="KeyTag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.keyTag"></a>

```csharp
public double KeyTag { get; }
```

- *Type:* double

---

##### `LatDegrees`<sup>Required</sup> <a name="LatDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDegrees"></a>

```csharp
public double LatDegrees { get; }
```

- *Type:* double

---

##### `LatDirection`<sup>Required</sup> <a name="LatDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latDirection"></a>

```csharp
public string LatDirection { get; }
```

- *Type:* string

---

##### `LatMinutes`<sup>Required</sup> <a name="LatMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latMinutes"></a>

```csharp
public double LatMinutes { get; }
```

- *Type:* double

---

##### `LatSeconds`<sup>Required</sup> <a name="LatSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.latSeconds"></a>

```csharp
public double LatSeconds { get; }
```

- *Type:* double

---

##### `LongDegrees`<sup>Required</sup> <a name="LongDegrees" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDegrees"></a>

```csharp
public double LongDegrees { get; }
```

- *Type:* double

---

##### `LongDirection`<sup>Required</sup> <a name="LongDirection" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longDirection"></a>

```csharp
public string LongDirection { get; }
```

- *Type:* string

---

##### `LongMinutes`<sup>Required</sup> <a name="LongMinutes" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longMinutes"></a>

```csharp
public double LongMinutes { get; }
```

- *Type:* double

---

##### `LongSeconds`<sup>Required</sup> <a name="LongSeconds" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.longSeconds"></a>

```csharp
public double LongSeconds { get; }
```

- *Type:* double

---

##### `MatchingType`<sup>Required</sup> <a name="MatchingType" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.matchingType"></a>

```csharp
public double MatchingType { get; }
```

- *Type:* double

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PrecisionHorz`<sup>Required</sup> <a name="PrecisionHorz" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionHorz"></a>

```csharp
public double PrecisionHorz { get; }
```

- *Type:* double

---

##### `PrecisionVert`<sup>Required</sup> <a name="PrecisionVert" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.precisionVert"></a>

```csharp
public double PrecisionVert { get; }
```

- *Type:* double

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.preference"></a>

```csharp
public double Preference { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.protocol"></a>

```csharp
public double Protocol { get; }
```

- *Type:* double

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Replacement`<sup>Required</sup> <a name="Replacement" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.replacement"></a>

```csharp
public string Replacement { get; }
```

- *Type:* string

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.selector"></a>

```csharp
public double Selector { get; }
```

- *Type:* double

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.type"></a>

```csharp
public double Type { get; }
```

- *Type:* double

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.usage"></a>

```csharp
public double Usage { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordDataOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DnsRecordSettingsOutputReference <a name="DnsRecordSettingsOutputReference" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DnsRecordSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetFlattenCname">ResetFlattenCname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv4Only">ResetIpv4Only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv6Only">ResetIpv6Only</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFlattenCname` <a name="ResetFlattenCname" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetFlattenCname"></a>

```csharp
private void ResetFlattenCname()
```

##### `ResetIpv4Only` <a name="ResetIpv4Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv4Only"></a>

```csharp
private void ResetIpv4Only()
```

##### `ResetIpv6Only` <a name="ResetIpv6Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.resetIpv6Only"></a>

```csharp
private void ResetIpv6Only()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCnameInput">FlattenCnameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4OnlyInput">Ipv4OnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6OnlyInput">Ipv6OnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCname">FlattenCname</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4Only">Ipv4Only</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6Only">Ipv6Only</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FlattenCnameInput`<sup>Optional</sup> <a name="FlattenCnameInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCnameInput"></a>

```csharp
public object FlattenCnameInput { get; }
```

- *Type:* object

---

##### `Ipv4OnlyInput`<sup>Optional</sup> <a name="Ipv4OnlyInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4OnlyInput"></a>

```csharp
public object Ipv4OnlyInput { get; }
```

- *Type:* object

---

##### `Ipv6OnlyInput`<sup>Optional</sup> <a name="Ipv6OnlyInput" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6OnlyInput"></a>

```csharp
public object Ipv6OnlyInput { get; }
```

- *Type:* object

---

##### `FlattenCname`<sup>Required</sup> <a name="FlattenCname" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.flattenCname"></a>

```csharp
public object FlattenCname { get; }
```

- *Type:* object

---

##### `Ipv4Only`<sup>Required</sup> <a name="Ipv4Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv4Only"></a>

```csharp
public object Ipv4Only { get; }
```

- *Type:* object

---

##### `Ipv6Only`<sup>Required</sup> <a name="Ipv6Only" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.ipv6Only"></a>

```csharp
public object Ipv6Only { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dnsRecord.DnsRecordSettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



