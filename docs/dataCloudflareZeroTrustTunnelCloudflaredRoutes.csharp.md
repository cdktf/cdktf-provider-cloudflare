# `dataCloudflareZeroTrustTunnelCloudflaredRoutes` Submodule <a name="`dataCloudflareZeroTrustTunnelCloudflaredRoutes` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredRoutes <a name="DataCloudflareZeroTrustTunnelCloudflaredRoutes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes cloudflare_zero_trust_tunnel_cloudflared_routes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelCloudflaredRoutes(Construct Scope, string Id, DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig">DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig">DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetExistedAt">ResetExistedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetIsDeleted">ResetIsDeleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetNetworkSubset">ResetNetworkSubset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetNetworkSuperset">ResetNetworkSuperset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetRouteId">ResetRouteId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetTunnelId">ResetTunnelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetTunTypes">ResetTunTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetExistedAt` <a name="ResetExistedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetExistedAt"></a>

```csharp
private void ResetExistedAt()
```

##### `ResetIsDeleted` <a name="ResetIsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetIsDeleted"></a>

```csharp
private void ResetIsDeleted()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

##### `ResetNetworkSubset` <a name="ResetNetworkSubset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetNetworkSubset"></a>

```csharp
private void ResetNetworkSubset()
```

##### `ResetNetworkSuperset` <a name="ResetNetworkSuperset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetNetworkSuperset"></a>

```csharp
private void ResetNetworkSuperset()
```

##### `ResetRouteId` <a name="ResetRouteId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetRouteId"></a>

```csharp
private void ResetRouteId()
```

##### `ResetTunnelId` <a name="ResetTunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetTunnelId"></a>

```csharp
private void ResetTunnelId()
```

##### `ResetTunTypes` <a name="ResetTunTypes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetTunTypes"></a>

```csharp
private void ResetTunTypes()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.resetVirtualNetworkId"></a>

```csharp
private void ResetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredRoutes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustTunnelCloudflaredRoutes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustTunnelCloudflaredRoutes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustTunnelCloudflaredRoutes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

DataCloudflareZeroTrustTunnelCloudflaredRoutes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflaredRoutes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflaredRoutes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustTunnelCloudflaredRoutes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflaredRoutes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.result">Result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList">DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.existedAtInput">ExistedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.isDeletedInput">IsDeletedInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.networkSubsetInput">NetworkSubsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.networkSupersetInput">NetworkSupersetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.routeIdInput">RouteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tunnelIdInput">TunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tunTypesInput">TunTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.existedAt">ExistedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.isDeleted">IsDeleted</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.networkSubset">NetworkSubset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.networkSuperset">NetworkSuperset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.routeId">RouteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tunTypes">TunTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.result"></a>

```csharp
public DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList Result { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList">DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `ExistedAtInput`<sup>Optional</sup> <a name="ExistedAtInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.existedAtInput"></a>

```csharp
public string ExistedAtInput { get; }
```

- *Type:* string

---

##### `IsDeletedInput`<sup>Optional</sup> <a name="IsDeletedInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.isDeletedInput"></a>

```csharp
public bool|IResolvable IsDeletedInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `NetworkSubsetInput`<sup>Optional</sup> <a name="NetworkSubsetInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.networkSubsetInput"></a>

```csharp
public string NetworkSubsetInput { get; }
```

- *Type:* string

---

##### `NetworkSupersetInput`<sup>Optional</sup> <a name="NetworkSupersetInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.networkSupersetInput"></a>

```csharp
public string NetworkSupersetInput { get; }
```

- *Type:* string

---

##### `RouteIdInput`<sup>Optional</sup> <a name="RouteIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.routeIdInput"></a>

```csharp
public string RouteIdInput { get; }
```

- *Type:* string

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tunnelIdInput"></a>

```csharp
public string TunnelIdInput { get; }
```

- *Type:* string

---

##### `TunTypesInput`<sup>Optional</sup> <a name="TunTypesInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tunTypesInput"></a>

```csharp
public string[] TunTypesInput { get; }
```

- *Type:* string[]

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ExistedAt`<sup>Required</sup> <a name="ExistedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.existedAt"></a>

```csharp
public string ExistedAt { get; }
```

- *Type:* string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.isDeleted"></a>

```csharp
public bool|IResolvable IsDeleted { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

##### `NetworkSubset`<sup>Required</sup> <a name="NetworkSubset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.networkSubset"></a>

```csharp
public string NetworkSubset { get; }
```

- *Type:* string

---

##### `NetworkSuperset`<sup>Required</sup> <a name="NetworkSuperset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.networkSuperset"></a>

```csharp
public string NetworkSuperset { get; }
```

- *Type:* string

---

##### `RouteId`<sup>Required</sup> <a name="RouteId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.routeId"></a>

```csharp
public string RouteId { get; }
```

- *Type:* string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

##### `TunTypes`<sup>Required</sup> <a name="TunTypes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tunTypes"></a>

```csharp
public string[] TunTypes { get; }
```

- *Type:* string[]

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig <a name="DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string Comment = null,
    string ExistedAt = null,
    bool|IResolvable IsDeleted = null,
    double MaxItems = null,
    string NetworkSubset = null,
    string NetworkSuperset = null,
    string RouteId = null,
    string TunnelId = null,
    string[] TunTypes = null,
    string VirtualNetworkId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.accountId">AccountId</a></code> | <code>string</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.comment">Comment</a></code> | <code>string</code> | Optional remark describing the route. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.existedAt">ExistedAt</a></code> | <code>string</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.isDeleted">IsDeleted</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | If `true`, only include deleted routes. If `false`, exclude deleted routes. If empty, all routes will be included. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.networkSubset">NetworkSubset</a></code> | <code>string</code> | If set, only list routes that are contained within this IP range. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.networkSuperset">NetworkSuperset</a></code> | <code>string</code> | If set, only list routes that contain this IP range. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.routeId">RouteId</a></code> | <code>string</code> | UUID of the route. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.tunnelId">TunnelId</a></code> | <code>string</code> | UUID of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.tunTypes">TunTypes</a></code> | <code>string[]</code> | The types of tunnels to filter by, separated by commas. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | UUID of the virtual network. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#account_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#account_id}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Optional remark describing the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#comment DataCloudflareZeroTrustTunnelCloudflaredRoutes#comment}

---

##### `ExistedAt`<sup>Optional</sup> <a name="ExistedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.existedAt"></a>

```csharp
public string ExistedAt { get; set; }
```

- *Type:* string

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#existed_at DataCloudflareZeroTrustTunnelCloudflaredRoutes#existed_at}

---

##### `IsDeleted`<sup>Optional</sup> <a name="IsDeleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.isDeleted"></a>

```csharp
public bool|IResolvable IsDeleted { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

If `true`, only include deleted routes. If `false`, exclude deleted routes. If empty, all routes will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#is_deleted DataCloudflareZeroTrustTunnelCloudflaredRoutes#is_deleted}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#max_items DataCloudflareZeroTrustTunnelCloudflaredRoutes#max_items}

---

##### `NetworkSubset`<sup>Optional</sup> <a name="NetworkSubset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.networkSubset"></a>

```csharp
public string NetworkSubset { get; set; }
```

- *Type:* string

If set, only list routes that are contained within this IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#network_subset DataCloudflareZeroTrustTunnelCloudflaredRoutes#network_subset}

---

##### `NetworkSuperset`<sup>Optional</sup> <a name="NetworkSuperset" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.networkSuperset"></a>

```csharp
public string NetworkSuperset { get; set; }
```

- *Type:* string

If set, only list routes that contain this IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#network_superset DataCloudflareZeroTrustTunnelCloudflaredRoutes#network_superset}

---

##### `RouteId`<sup>Optional</sup> <a name="RouteId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.routeId"></a>

```csharp
public string RouteId { get; set; }
```

- *Type:* string

UUID of the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#route_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#route_id}

---

##### `TunnelId`<sup>Optional</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.tunnelId"></a>

```csharp
public string TunnelId { get; set; }
```

- *Type:* string

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#tunnel_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#tunnel_id}

---

##### `TunTypes`<sup>Optional</sup> <a name="TunTypes" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.tunTypes"></a>

```csharp
public string[] TunTypes { get; set; }
```

- *Type:* string[]

The types of tunnels to filter by, separated by commas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#tun_types DataCloudflareZeroTrustTunnelCloudflaredRoutes#tun_types}

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesConfig.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

UUID of the virtual network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_tunnel_cloudflared_routes#virtual_network_id DataCloudflareZeroTrustTunnelCloudflaredRoutes#virtual_network_id}

---

### DataCloudflareZeroTrustTunnelCloudflaredRoutesResult <a name="DataCloudflareZeroTrustTunnelCloudflaredRoutesResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResult.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelCloudflaredRoutesResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList <a name="DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.get"></a>

```csharp
private DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference <a name="DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.deletedAt">DeletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.tunnelName">TunnelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.tunType">TunType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.virtualNetworkName">VirtualNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResult">DataCloudflareZeroTrustTunnelCloudflaredRoutesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DeletedAt`<sup>Required</sup> <a name="DeletedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.deletedAt"></a>

```csharp
public string DeletedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

##### `TunnelName`<sup>Required</sup> <a name="TunnelName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.tunnelName"></a>

```csharp
public string TunnelName { get; }
```

- *Type:* string

---

##### `TunType`<sup>Required</sup> <a name="TunType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.tunType"></a>

```csharp
public string TunType { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `VirtualNetworkName`<sup>Required</sup> <a name="VirtualNetworkName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.virtualNetworkName"></a>

```csharp
public string VirtualNetworkName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareZeroTrustTunnelCloudflaredRoutesResult InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflaredRoutes.DataCloudflareZeroTrustTunnelCloudflaredRoutesResult">DataCloudflareZeroTrustTunnelCloudflaredRoutesResult</a>

---



