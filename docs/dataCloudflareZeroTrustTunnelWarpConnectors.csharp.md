# `dataCloudflareZeroTrustTunnelWarpConnectors` Submodule <a name="`dataCloudflareZeroTrustTunnelWarpConnectors` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelWarpConnectors <a name="DataCloudflareZeroTrustTunnelWarpConnectors" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connectors cloudflare_zero_trust_tunnel_warp_connectors}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelWarpConnectors(Construct Scope, string Id, DataCloudflareZeroTrustTunnelWarpConnectorsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig">DataCloudflareZeroTrustTunnelWarpConnectorsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig">DataCloudflareZeroTrustTunnelWarpConnectorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetExcludePrefix">ResetExcludePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetExistedAt">ResetExistedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetIncludePrefix">ResetIncludePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetIsDeleted">ResetIsDeleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetUuid">ResetUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetWasActiveAt">ResetWasActiveAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetWasInactiveAt">ResetWasInactiveAt</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetExcludePrefix` <a name="ResetExcludePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetExcludePrefix"></a>

```csharp
private void ResetExcludePrefix()
```

##### `ResetExistedAt` <a name="ResetExistedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetExistedAt"></a>

```csharp
private void ResetExistedAt()
```

##### `ResetIncludePrefix` <a name="ResetIncludePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetIncludePrefix"></a>

```csharp
private void ResetIncludePrefix()
```

##### `ResetIsDeleted` <a name="ResetIsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetIsDeleted"></a>

```csharp
private void ResetIsDeleted()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetUuid` <a name="ResetUuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetUuid"></a>

```csharp
private void ResetUuid()
```

##### `ResetWasActiveAt` <a name="ResetWasActiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetWasActiveAt"></a>

```csharp
private void ResetWasActiveAt()
```

##### `ResetWasInactiveAt` <a name="ResetWasInactiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetWasInactiveAt"></a>

```csharp
private void ResetWasInactiveAt()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelWarpConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustTunnelWarpConnectors.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustTunnelWarpConnectors.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustTunnelWarpConnectors.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustTunnelWarpConnectors.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelWarpConnectors resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelWarpConnectors to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustTunnelWarpConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connectors#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelWarpConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList">DataCloudflareZeroTrustTunnelWarpConnectorsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.excludePrefixInput">ExcludePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.existedAtInput">ExistedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.includePrefixInput">IncludePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.isDeletedInput">IsDeletedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.uuidInput">UuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasActiveAtInput">WasActiveAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasInactiveAtInput">WasInactiveAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.excludePrefix">ExcludePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.existedAt">ExistedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.includePrefix">IncludePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.isDeleted">IsDeleted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasActiveAt">WasActiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasInactiveAt">WasInactiveAt</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.result"></a>

```csharp
public DataCloudflareZeroTrustTunnelWarpConnectorsResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList">DataCloudflareZeroTrustTunnelWarpConnectorsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ExcludePrefixInput`<sup>Optional</sup> <a name="ExcludePrefixInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.excludePrefixInput"></a>

```csharp
public string ExcludePrefixInput { get; }
```

- *Type:* string

---

##### `ExistedAtInput`<sup>Optional</sup> <a name="ExistedAtInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.existedAtInput"></a>

```csharp
public string ExistedAtInput { get; }
```

- *Type:* string

---

##### `IncludePrefixInput`<sup>Optional</sup> <a name="IncludePrefixInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.includePrefixInput"></a>

```csharp
public string IncludePrefixInput { get; }
```

- *Type:* string

---

##### `IsDeletedInput`<sup>Optional</sup> <a name="IsDeletedInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.isDeletedInput"></a>

```csharp
public object IsDeletedInput { get; }
```

- *Type:* object

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `UuidInput`<sup>Optional</sup> <a name="UuidInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.uuidInput"></a>

```csharp
public string UuidInput { get; }
```

- *Type:* string

---

##### `WasActiveAtInput`<sup>Optional</sup> <a name="WasActiveAtInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasActiveAtInput"></a>

```csharp
public string WasActiveAtInput { get; }
```

- *Type:* string

---

##### `WasInactiveAtInput`<sup>Optional</sup> <a name="WasInactiveAtInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasInactiveAtInput"></a>

```csharp
public string WasInactiveAtInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ExcludePrefix`<sup>Required</sup> <a name="ExcludePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.excludePrefix"></a>

```csharp
public string ExcludePrefix { get; }
```

- *Type:* string

---

##### `ExistedAt`<sup>Required</sup> <a name="ExistedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.existedAt"></a>

```csharp
public string ExistedAt { get; }
```

- *Type:* string

---

##### `IncludePrefix`<sup>Required</sup> <a name="IncludePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.includePrefix"></a>

```csharp
public string IncludePrefix { get; }
```

- *Type:* string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.isDeleted"></a>

```csharp
public object IsDeleted { get; }
```

- *Type:* object

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `WasActiveAt`<sup>Required</sup> <a name="WasActiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasActiveAt"></a>

```csharp
public string WasActiveAt { get; }
```

- *Type:* string

---

##### `WasInactiveAt`<sup>Required</sup> <a name="WasInactiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasInactiveAt"></a>

```csharp
public string WasInactiveAt { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelWarpConnectorsConfig <a name="DataCloudflareZeroTrustTunnelWarpConnectorsConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelWarpConnectorsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string ExcludePrefix = null,
    string ExistedAt = null,
    string IncludePrefix = null,
    object IsDeleted = null,
    double MaxItems = null,
    string Name = null,
    string Status = null,
    string Uuid = null,
    string WasActiveAt = null,
    string WasInactiveAt = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.accountId">AccountId</a></code> | <code>string</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.excludePrefix">ExcludePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connectors#exclude_prefix DataCloudflareZeroTrustTunnelWarpConnectors#exclude_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.existedAt">ExistedAt</a></code> | <code>string</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.includePrefix">IncludePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connectors#include_prefix DataCloudflareZeroTrustTunnelWarpConnectors#include_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.isDeleted">IsDeleted</a></code> | <code>object</code> | If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.name">Name</a></code> | <code>string</code> | A user-friendly name for the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.status">Status</a></code> | <code>string</code> | The status of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.uuid">Uuid</a></code> | <code>string</code> | UUID of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.wasActiveAt">WasActiveAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connectors#was_active_at DataCloudflareZeroTrustTunnelWarpConnectors#was_active_at}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.wasInactiveAt">WasInactiveAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connectors#was_inactive_at DataCloudflareZeroTrustTunnelWarpConnectors#was_inactive_at}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connectors#account_id DataCloudflareZeroTrustTunnelWarpConnectors#account_id}

---

##### `ExcludePrefix`<sup>Optional</sup> <a name="ExcludePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.excludePrefix"></a>

```csharp
public string ExcludePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connectors#exclude_prefix DataCloudflareZeroTrustTunnelWarpConnectors#exclude_prefix}.

---

##### `ExistedAt`<sup>Optional</sup> <a name="ExistedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.existedAt"></a>

```csharp
public string ExistedAt { get; set; }
```

- *Type:* string

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connectors#existed_at DataCloudflareZeroTrustTunnelWarpConnectors#existed_at}

---

##### `IncludePrefix`<sup>Optional</sup> <a name="IncludePrefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.includePrefix"></a>

```csharp
public string IncludePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connectors#include_prefix DataCloudflareZeroTrustTunnelWarpConnectors#include_prefix}.

---

##### `IsDeleted`<sup>Optional</sup> <a name="IsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.isDeleted"></a>

```csharp
public object IsDeleted { get; set; }
```

- *Type:* object

If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connectors#is_deleted DataCloudflareZeroTrustTunnelWarpConnectors#is_deleted}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connectors#max_items DataCloudflareZeroTrustTunnelWarpConnectors#max_items}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A user-friendly name for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connectors#name DataCloudflareZeroTrustTunnelWarpConnectors#name}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The status of the tunnel.

Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
Available values: "inactive", "degraded", "healthy", "down".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connectors#status DataCloudflareZeroTrustTunnelWarpConnectors#status}

---

##### `Uuid`<sup>Optional</sup> <a name="Uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.uuid"></a>

```csharp
public string Uuid { get; set; }
```

- *Type:* string

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connectors#uuid DataCloudflareZeroTrustTunnelWarpConnectors#uuid}

---

##### `WasActiveAt`<sup>Optional</sup> <a name="WasActiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.wasActiveAt"></a>

```csharp
public string WasActiveAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connectors#was_active_at DataCloudflareZeroTrustTunnelWarpConnectors#was_active_at}.

---

##### `WasInactiveAt`<sup>Optional</sup> <a name="WasInactiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.wasInactiveAt"></a>

```csharp
public string WasInactiveAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/zero_trust_tunnel_warp_connectors#was_inactive_at DataCloudflareZeroTrustTunnelWarpConnectors#was_inactive_at}.

---

### DataCloudflareZeroTrustTunnelWarpConnectorsResult <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelWarpConnectorsResult {

};
```


### DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.get"></a>

```csharp
private DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.clientVersion">ClientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.coloName">ColoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.isPendingReconnect">IsPendingReconnect</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.openedAt">OpenedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.originIp">OriginIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections">DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientVersion`<sup>Required</sup> <a name="ClientVersion" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.clientVersion"></a>

```csharp
public string ClientVersion { get; }
```

- *Type:* string

---

##### `ColoName`<sup>Required</sup> <a name="ColoName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.coloName"></a>

```csharp
public string ColoName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsPendingReconnect`<sup>Required</sup> <a name="IsPendingReconnect" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.isPendingReconnect"></a>

```csharp
public IResolvable IsPendingReconnect { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OpenedAt`<sup>Required</sup> <a name="OpenedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.openedAt"></a>

```csharp
public string OpenedAt { get; }
```

- *Type:* string

---

##### `OriginIp`<sup>Required</sup> <a name="OriginIp" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.originIp"></a>

```csharp
public string OriginIp { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections">DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections</a>

---


### DataCloudflareZeroTrustTunnelWarpConnectorsResultList <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelWarpConnectorsResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.get"></a>

```csharp
private DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.accountTag">AccountTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList">DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connsActiveAt">ConnsActiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connsInactiveAt">ConnsInactiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.deletedAt">DeletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.remoteConfig">RemoteConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.tunType">TunType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResult">DataCloudflareZeroTrustTunnelWarpConnectorsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountTag`<sup>Required</sup> <a name="AccountTag" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.accountTag"></a>

```csharp
public string AccountTag { get; }
```

- *Type:* string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connections"></a>

```csharp
public DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList Connections { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList">DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList</a>

---

##### `ConnsActiveAt`<sup>Required</sup> <a name="ConnsActiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connsActiveAt"></a>

```csharp
public string ConnsActiveAt { get; }
```

- *Type:* string

---

##### `ConnsInactiveAt`<sup>Required</sup> <a name="ConnsInactiveAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connsInactiveAt"></a>

```csharp
public string ConnsInactiveAt { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DeletedAt`<sup>Required</sup> <a name="DeletedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.deletedAt"></a>

```csharp
public string DeletedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RemoteConfig`<sup>Required</sup> <a name="RemoteConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.remoteConfig"></a>

```csharp
public IResolvable RemoteConfig { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TunType`<sup>Required</sup> <a name="TunType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.tunType"></a>

```csharp
public string TunType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustTunnelWarpConnectorsResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResult">DataCloudflareZeroTrustTunnelWarpConnectorsResult</a>

---



