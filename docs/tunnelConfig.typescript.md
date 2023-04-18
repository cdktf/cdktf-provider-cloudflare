# `cloudflare_tunnel_config`

Refer to the Terraform Registory for docs: [`cloudflare_tunnel_config`](https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config).

# `tunnelConfig` Submodule <a name="`tunnelConfig` Submodule" id="@cdktf/provider-cloudflare.tunnelConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TunnelConfig <a name="TunnelConfig" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config cloudflare_tunnel_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer"></a>

```typescript
import { tunnelConfig } from '@cdktf/provider-cloudflare'

new tunnelConfig.TunnelConfig(scope: Construct, id: string, config: TunnelConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig">TunnelConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.putConfig"></a>

```typescript
public putConfig(value: TunnelConfigConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isConstruct"></a>

```typescript
import { tunnelConfig } from '@cdktf/provider-cloudflare'

tunnelConfig.TunnelConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformElement"></a>

```typescript
import { tunnelConfig } from '@cdktf/provider-cloudflare'

tunnelConfig.TunnelConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformResource"></a>

```typescript
import { tunnelConfig } from '@cdktf/provider-cloudflare'

tunnelConfig.TunnelConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference">TunnelConfigConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tunnelIdInput">tunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.config"></a>

```typescript
public readonly config: TunnelConfigConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference">TunnelConfigConfigAOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.configInput"></a>

```typescript
public readonly configInput: TunnelConfigConfigA;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tunnelIdInput"></a>

```typescript
public readonly tunnelIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TunnelConfigConfig <a name="TunnelConfigConfig" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.Initializer"></a>

```typescript
import { tunnelConfig } from '@cdktf/provider-cloudflare'

const tunnelConfigConfig: tunnelConfig.TunnelConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.tunnelId">tunnelId</a></code> | <code>string</code> | Identifier of the Tunnel to target for this configuration. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#id TunnelConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#account_id TunnelConfig#account_id}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.config"></a>

```typescript
public readonly config: TunnelConfigConfigA;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a>

config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#config TunnelConfig#config}

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

Identifier of the Tunnel to target for this configuration.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#tunnel_id TunnelConfig#tunnel_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#id TunnelConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TunnelConfigConfigA <a name="TunnelConfigConfigA" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.Initializer"></a>

```typescript
import { tunnelConfig } from '@cdktf/provider-cloudflare'

const tunnelConfigConfigA: tunnelConfig.TunnelConfigConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.ingressRule">ingressRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>[]</code> | ingress_rule block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.originRequest">originRequest</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a></code> | origin_request block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.warpRouting">warpRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a></code> | warp_routing block. |

---

##### `ingressRule`<sup>Required</sup> <a name="ingressRule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.ingressRule"></a>

```typescript
public readonly ingressRule: IResolvable | TunnelConfigConfigIngressRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>[]

ingress_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#ingress_rule TunnelConfig#ingress_rule}

---

##### `originRequest`<sup>Optional</sup> <a name="originRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.originRequest"></a>

```typescript
public readonly originRequest: TunnelConfigConfigOriginRequest;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

origin_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#origin_request TunnelConfig#origin_request}

---

##### `warpRouting`<sup>Optional</sup> <a name="warpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA.property.warpRouting"></a>

```typescript
public readonly warpRouting: TunnelConfigConfigWarpRouting;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

warp_routing block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#warp_routing TunnelConfig#warp_routing}

---

### TunnelConfigConfigIngressRule <a name="TunnelConfigConfigIngressRule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.Initializer"></a>

```typescript
import { tunnelConfig } from '@cdktf/provider-cloudflare'

const tunnelConfigConfigIngressRule: tunnelConfig.TunnelConfigConfigIngressRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.service">service</a></code> | <code>string</code> | Name of the service to which the request will be sent. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.hostname">hostname</a></code> | <code>string</code> | Hostname to match the incoming request with. If the hostname matches, the request will be sent to the service. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.path">path</a></code> | <code>string</code> | Path of the incoming request. If the path matches, the request will be sent to the local service. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Name of the service to which the request will be sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#service TunnelConfig#service}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname to match the incoming request with. If the hostname matches, the request will be sent to the service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#hostname TunnelConfig#hostname}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path of the incoming request. If the path matches, the request will be sent to the local service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#path TunnelConfig#path}

---

### TunnelConfigConfigOriginRequest <a name="TunnelConfigConfigOriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.Initializer"></a>

```typescript
import { tunnelConfig } from '@cdktf/provider-cloudflare'

const tunnelConfigConfigOriginRequest: tunnelConfig.TunnelConfigConfigOriginRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.bastionMode">bastionMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Runs as jump host. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.caPool">caPool</a></code> | <code>string</code> | Path to the certificate authority (CA) for the certificate of your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.connectTimeout">connectTimeout</a></code> | <code>string</code> | Timeout for establishing a new TCP connection to your origin server. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.disableChunkedEncoding">disableChunkedEncoding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.httpHostHeader">httpHostHeader</a></code> | <code>string</code> | Sets the HTTP Host header on requests sent to the local service. Defaults to `""`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.ipRules">ipRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>[]</code> | ip_rules block. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveConnections">keepAliveConnections</a></code> | <code>number</code> | Maximum number of idle keepalive connections between Tunnel and your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveTimeout">keepAliveTimeout</a></code> | <code>string</code> | Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noHappyEyeballs">noHappyEyeballs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noTlsVerify">noTlsVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disables TLS verification of the certificate presented by your origin. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.originServerName">originServerName</a></code> | <code>string</code> | Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyAddress">proxyAddress</a></code> | <code>string</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyPort">proxyPort</a></code> | <code>number</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyType">proxyType</a></code> | <code>string</code> | cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tcpKeepAlive">tcpKeepAlive</a></code> | <code>string</code> | The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tlsTimeout">tlsTimeout</a></code> | <code>string</code> | Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server. |

---

##### `bastionMode`<sup>Optional</sup> <a name="bastionMode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.bastionMode"></a>

```typescript
public readonly bastionMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Runs as jump host.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#bastion_mode TunnelConfig#bastion_mode}

---

##### `caPool`<sup>Optional</sup> <a name="caPool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.caPool"></a>

```typescript
public readonly caPool: string;
```

- *Type:* string

Path to the certificate authority (CA) for the certificate of your origin.

This option should be used only if your certificate is not signed by Cloudflare. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#ca_pool TunnelConfig#ca_pool}

---

##### `connectTimeout`<sup>Optional</sup> <a name="connectTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: string;
```

- *Type:* string

Timeout for establishing a new TCP connection to your origin server.

This excludes the time taken to establish TLS, which is controlled by `tlsTimeout`. Defaults to `30s`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#connect_timeout TunnelConfig#connect_timeout}

---

##### `disableChunkedEncoding`<sup>Optional</sup> <a name="disableChunkedEncoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.disableChunkedEncoding"></a>

```typescript
public readonly disableChunkedEncoding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disables chunked transfer encoding. Useful if you are running a Web Server Gateway Interface (WSGI) server. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#disable_chunked_encoding TunnelConfig#disable_chunked_encoding}

---

##### `httpHostHeader`<sup>Optional</sup> <a name="httpHostHeader" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.httpHostHeader"></a>

```typescript
public readonly httpHostHeader: string;
```

- *Type:* string

Sets the HTTP Host header on requests sent to the local service. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#http_host_header TunnelConfig#http_host_header}

---

##### `ipRules`<sup>Optional</sup> <a name="ipRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.ipRules"></a>

```typescript
public readonly ipRules: IResolvable | TunnelConfigConfigOriginRequestIpRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>[]

ip_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#ip_rules TunnelConfig#ip_rules}

---

##### `keepAliveConnections`<sup>Optional</sup> <a name="keepAliveConnections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveConnections"></a>

```typescript
public readonly keepAliveConnections: number;
```

- *Type:* number

Maximum number of idle keepalive connections between Tunnel and your origin.

This does not restrict the total number of concurrent connections. Defaults to `100`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#keep_alive_connections TunnelConfig#keep_alive_connections}

---

##### `keepAliveTimeout`<sup>Optional</sup> <a name="keepAliveTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.keepAliveTimeout"></a>

```typescript
public readonly keepAliveTimeout: string;
```

- *Type:* string

Timeout after which an idle keepalive connection can be discarded. Defaults to `1m30s`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#keep_alive_timeout TunnelConfig#keep_alive_timeout}

---

##### `noHappyEyeballs`<sup>Optional</sup> <a name="noHappyEyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noHappyEyeballs"></a>

```typescript
public readonly noHappyEyeballs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable the “happy eyeballs” algorithm for IPv4/IPv6 fallback if your local network has misconfigured one of the protocols.

Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#no_happy_eyeballs TunnelConfig#no_happy_eyeballs}

---

##### `noTlsVerify`<sup>Optional</sup> <a name="noTlsVerify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.noTlsVerify"></a>

```typescript
public readonly noTlsVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disables TLS verification of the certificate presented by your origin.

Will allow any certificate from the origin to be accepted. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#no_tls_verify TunnelConfig#no_tls_verify}

---

##### `originServerName`<sup>Optional</sup> <a name="originServerName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.originServerName"></a>

```typescript
public readonly originServerName: string;
```

- *Type:* string

Hostname that cloudflared should expect from your origin server certificate. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#origin_server_name TunnelConfig#origin_server_name}

---

##### `proxyAddress`<sup>Optional</sup> <a name="proxyAddress" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyAddress"></a>

```typescript
public readonly proxyAddress: string;
```

- *Type:* string

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen address for that proxy. Defaults to `127.0.0.1`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#proxy_address TunnelConfig#proxy_address}

---

##### `proxyPort`<sup>Optional</sup> <a name="proxyPort" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyPort"></a>

```typescript
public readonly proxyPort: number;
```

- *Type:* number

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures the listen port for that proxy. If set to zero, an unused port will randomly be chosen. Defaults to `0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#proxy_port TunnelConfig#proxy_port}

---

##### `proxyType`<sup>Optional</sup> <a name="proxyType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.proxyType"></a>

```typescript
public readonly proxyType: string;
```

- *Type:* string

cloudflared starts a proxy server to translate HTTP traffic into TCP when proxying, for example, SSH or RDP.

This configures what type of proxy will be started. Available values: ``, `socks`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#proxy_type TunnelConfig#proxy_type}

---

##### `tcpKeepAlive`<sup>Optional</sup> <a name="tcpKeepAlive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tcpKeepAlive"></a>

```typescript
public readonly tcpKeepAlive: string;
```

- *Type:* string

The timeout after which a TCP keepalive packet is sent on a connection between Tunnel and the origin server.

Defaults to `30s`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#tcp_keep_alive TunnelConfig#tcp_keep_alive}

---

##### `tlsTimeout`<sup>Optional</sup> <a name="tlsTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest.property.tlsTimeout"></a>

```typescript
public readonly tlsTimeout: string;
```

- *Type:* string

Timeout for completing a TLS handshake to your origin server, if you have chosen to connect Tunnel to an HTTPS server.

Defaults to `10s`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#tls_timeout TunnelConfig#tls_timeout}

---

### TunnelConfigConfigOriginRequestIpRules <a name="TunnelConfigConfigOriginRequestIpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.Initializer"></a>

```typescript
import { tunnelConfig } from '@cdktf/provider-cloudflare'

const tunnelConfigConfigOriginRequestIpRules: tunnelConfig.TunnelConfigConfigOriginRequestIpRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.allow">allow</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow the IP prefix. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.ports">ports</a></code> | <code>number[]</code> | Ports to use within the IP rule. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.prefix">prefix</a></code> | <code>string</code> | IP rule prefix. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.allow"></a>

```typescript
public readonly allow: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow the IP prefix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#allow TunnelConfig#allow}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

Ports to use within the IP rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#ports TunnelConfig#ports}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

IP rule prefix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#prefix TunnelConfig#prefix}

---

### TunnelConfigConfigWarpRouting <a name="TunnelConfigConfigWarpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting.Initializer"></a>

```typescript
import { tunnelConfig } from '@cdktf/provider-cloudflare'

const tunnelConfigConfigWarpRouting: tunnelConfig.TunnelConfigConfigWarpRouting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether WARP routing is enabled. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether WARP routing is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/tunnel_config#enabled TunnelConfig#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### TunnelConfigConfigAOutputReference <a name="TunnelConfigConfigAOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.Initializer"></a>

```typescript
import { tunnelConfig } from '@cdktf/provider-cloudflare'

new tunnelConfig.TunnelConfigConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putIngressRule">putIngressRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putOriginRequest">putOriginRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putWarpRouting">putWarpRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resetOriginRequest">resetOriginRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resetWarpRouting">resetWarpRouting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIngressRule` <a name="putIngressRule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putIngressRule"></a>

```typescript
public putIngressRule(value: IResolvable | TunnelConfigConfigIngressRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putIngressRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>[]

---

##### `putOriginRequest` <a name="putOriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putOriginRequest"></a>

```typescript
public putOriginRequest(value: TunnelConfigConfigOriginRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putOriginRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

---

##### `putWarpRouting` <a name="putWarpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putWarpRouting"></a>

```typescript
public putWarpRouting(value: TunnelConfigConfigWarpRouting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.putWarpRouting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

---

##### `resetOriginRequest` <a name="resetOriginRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resetOriginRequest"></a>

```typescript
public resetOriginRequest(): void
```

##### `resetWarpRouting` <a name="resetWarpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.resetWarpRouting"></a>

```typescript
public resetWarpRouting(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.ingressRule">ingressRule</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList">TunnelConfigConfigIngressRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.originRequest">originRequest</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference">TunnelConfigConfigOriginRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.warpRouting">warpRouting</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference">TunnelConfigConfigWarpRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.ingressRuleInput">ingressRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.originRequestInput">originRequestInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.warpRoutingInput">warpRoutingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingressRule`<sup>Required</sup> <a name="ingressRule" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.ingressRule"></a>

```typescript
public readonly ingressRule: TunnelConfigConfigIngressRuleList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList">TunnelConfigConfigIngressRuleList</a>

---

##### `originRequest`<sup>Required</sup> <a name="originRequest" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.originRequest"></a>

```typescript
public readonly originRequest: TunnelConfigConfigOriginRequestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference">TunnelConfigConfigOriginRequestOutputReference</a>

---

##### `warpRouting`<sup>Required</sup> <a name="warpRouting" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.warpRouting"></a>

```typescript
public readonly warpRouting: TunnelConfigConfigWarpRoutingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference">TunnelConfigConfigWarpRoutingOutputReference</a>

---

##### `ingressRuleInput`<sup>Optional</sup> <a name="ingressRuleInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.ingressRuleInput"></a>

```typescript
public readonly ingressRuleInput: IResolvable | TunnelConfigConfigIngressRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>[]

---

##### `originRequestInput`<sup>Optional</sup> <a name="originRequestInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.originRequestInput"></a>

```typescript
public readonly originRequestInput: TunnelConfigConfigOriginRequest;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

---

##### `warpRoutingInput`<sup>Optional</sup> <a name="warpRoutingInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.warpRoutingInput"></a>

```typescript
public readonly warpRoutingInput: TunnelConfigConfigWarpRouting;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TunnelConfigConfigA;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigA">TunnelConfigConfigA</a>

---


### TunnelConfigConfigIngressRuleList <a name="TunnelConfigConfigIngressRuleList" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer"></a>

```typescript
import { tunnelConfig } from '@cdktf/provider-cloudflare'

new tunnelConfig.TunnelConfigConfigIngressRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.get"></a>

```typescript
public get(index: number): TunnelConfigConfigIngressRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TunnelConfigConfigIngressRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a>[]

---


### TunnelConfigConfigIngressRuleOutputReference <a name="TunnelConfigConfigIngressRuleOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer"></a>

```typescript
import { tunnelConfig } from '@cdktf/provider-cloudflare'

new tunnelConfig.TunnelConfigConfigIngressRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TunnelConfigConfigIngressRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigIngressRule">TunnelConfigConfigIngressRule</a> | cdktf.IResolvable

---


### TunnelConfigConfigOriginRequestIpRulesList <a name="TunnelConfigConfigOriginRequestIpRulesList" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer"></a>

```typescript
import { tunnelConfig } from '@cdktf/provider-cloudflare'

new tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.get"></a>

```typescript
public get(index: number): TunnelConfigConfigOriginRequestIpRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TunnelConfigConfigOriginRequestIpRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>[]

---


### TunnelConfigConfigOriginRequestIpRulesOutputReference <a name="TunnelConfigConfigOriginRequestIpRulesOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer"></a>

```typescript
import { tunnelConfig } from '@cdktf/provider-cloudflare'

new tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllow` <a name="resetAllow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetAllow"></a>

```typescript
public resetAllow(): void
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allowInput">allowInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.portsInput">portsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allow">allow</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allowInput"></a>

```typescript
public readonly allowInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: number[];
```

- *Type:* number[]

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.allow"></a>

```typescript
public readonly allow: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TunnelConfigConfigOriginRequestIpRules | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a> | cdktf.IResolvable

---


### TunnelConfigConfigOriginRequestOutputReference <a name="TunnelConfigConfigOriginRequestOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer"></a>

```typescript
import { tunnelConfig } from '@cdktf/provider-cloudflare'

new tunnelConfig.TunnelConfigConfigOriginRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putIpRules">putIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetBastionMode">resetBastionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetCaPool">resetCaPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetConnectTimeout">resetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetDisableChunkedEncoding">resetDisableChunkedEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetHttpHostHeader">resetHttpHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetIpRules">resetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveConnections">resetKeepAliveConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveTimeout">resetKeepAliveTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoHappyEyeballs">resetNoHappyEyeballs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoTlsVerify">resetNoTlsVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetOriginServerName">resetOriginServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyAddress">resetProxyAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyPort">resetProxyPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyType">resetProxyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTcpKeepAlive">resetTcpKeepAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTlsTimeout">resetTlsTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpRules` <a name="putIpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putIpRules"></a>

```typescript
public putIpRules(value: IResolvable | TunnelConfigConfigOriginRequestIpRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.putIpRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>[]

---

##### `resetBastionMode` <a name="resetBastionMode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetBastionMode"></a>

```typescript
public resetBastionMode(): void
```

##### `resetCaPool` <a name="resetCaPool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetCaPool"></a>

```typescript
public resetCaPool(): void
```

##### `resetConnectTimeout` <a name="resetConnectTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetConnectTimeout"></a>

```typescript
public resetConnectTimeout(): void
```

##### `resetDisableChunkedEncoding` <a name="resetDisableChunkedEncoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetDisableChunkedEncoding"></a>

```typescript
public resetDisableChunkedEncoding(): void
```

##### `resetHttpHostHeader` <a name="resetHttpHostHeader" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetHttpHostHeader"></a>

```typescript
public resetHttpHostHeader(): void
```

##### `resetIpRules` <a name="resetIpRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetIpRules"></a>

```typescript
public resetIpRules(): void
```

##### `resetKeepAliveConnections` <a name="resetKeepAliveConnections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveConnections"></a>

```typescript
public resetKeepAliveConnections(): void
```

##### `resetKeepAliveTimeout` <a name="resetKeepAliveTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetKeepAliveTimeout"></a>

```typescript
public resetKeepAliveTimeout(): void
```

##### `resetNoHappyEyeballs` <a name="resetNoHappyEyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoHappyEyeballs"></a>

```typescript
public resetNoHappyEyeballs(): void
```

##### `resetNoTlsVerify` <a name="resetNoTlsVerify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetNoTlsVerify"></a>

```typescript
public resetNoTlsVerify(): void
```

##### `resetOriginServerName` <a name="resetOriginServerName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetOriginServerName"></a>

```typescript
public resetOriginServerName(): void
```

##### `resetProxyAddress` <a name="resetProxyAddress" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyAddress"></a>

```typescript
public resetProxyAddress(): void
```

##### `resetProxyPort` <a name="resetProxyPort" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyPort"></a>

```typescript
public resetProxyPort(): void
```

##### `resetProxyType` <a name="resetProxyType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetProxyType"></a>

```typescript
public resetProxyType(): void
```

##### `resetTcpKeepAlive` <a name="resetTcpKeepAlive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTcpKeepAlive"></a>

```typescript
public resetTcpKeepAlive(): void
```

##### `resetTlsTimeout` <a name="resetTlsTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.resetTlsTimeout"></a>

```typescript
public resetTlsTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRules">ipRules</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList">TunnelConfigConfigOriginRequestIpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionModeInput">bastionModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPoolInput">caPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeoutInput">connectTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncodingInput">disableChunkedEncodingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeaderInput">httpHostHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRulesInput">ipRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnectionsInput">keepAliveConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeoutInput">keepAliveTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballsInput">noHappyEyeballsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerifyInput">noTlsVerifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerNameInput">originServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddressInput">proxyAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPortInput">proxyPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyTypeInput">proxyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAliveInput">tcpKeepAliveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeoutInput">tlsTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionMode">bastionMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPool">caPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeout">connectTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncoding">disableChunkedEncoding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeader">httpHostHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnections">keepAliveConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeout">keepAliveTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballs">noHappyEyeballs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerify">noTlsVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerName">originServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddress">proxyAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPort">proxyPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyType">proxyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAlive">tcpKeepAlive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeout">tlsTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipRules`<sup>Required</sup> <a name="ipRules" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRules"></a>

```typescript
public readonly ipRules: TunnelConfigConfigOriginRequestIpRulesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRulesList">TunnelConfigConfigOriginRequestIpRulesList</a>

---

##### `bastionModeInput`<sup>Optional</sup> <a name="bastionModeInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionModeInput"></a>

```typescript
public readonly bastionModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `caPoolInput`<sup>Optional</sup> <a name="caPoolInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPoolInput"></a>

```typescript
public readonly caPoolInput: string;
```

- *Type:* string

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="connectTimeoutInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeoutInput"></a>

```typescript
public readonly connectTimeoutInput: string;
```

- *Type:* string

---

##### `disableChunkedEncodingInput`<sup>Optional</sup> <a name="disableChunkedEncodingInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncodingInput"></a>

```typescript
public readonly disableChunkedEncodingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpHostHeaderInput`<sup>Optional</sup> <a name="httpHostHeaderInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeaderInput"></a>

```typescript
public readonly httpHostHeaderInput: string;
```

- *Type:* string

---

##### `ipRulesInput`<sup>Optional</sup> <a name="ipRulesInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.ipRulesInput"></a>

```typescript
public readonly ipRulesInput: IResolvable | TunnelConfigConfigOriginRequestIpRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestIpRules">TunnelConfigConfigOriginRequestIpRules</a>[]

---

##### `keepAliveConnectionsInput`<sup>Optional</sup> <a name="keepAliveConnectionsInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnectionsInput"></a>

```typescript
public readonly keepAliveConnectionsInput: number;
```

- *Type:* number

---

##### `keepAliveTimeoutInput`<sup>Optional</sup> <a name="keepAliveTimeoutInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeoutInput"></a>

```typescript
public readonly keepAliveTimeoutInput: string;
```

- *Type:* string

---

##### `noHappyEyeballsInput`<sup>Optional</sup> <a name="noHappyEyeballsInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballsInput"></a>

```typescript
public readonly noHappyEyeballsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noTlsVerifyInput`<sup>Optional</sup> <a name="noTlsVerifyInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerifyInput"></a>

```typescript
public readonly noTlsVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `originServerNameInput`<sup>Optional</sup> <a name="originServerNameInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerNameInput"></a>

```typescript
public readonly originServerNameInput: string;
```

- *Type:* string

---

##### `proxyAddressInput`<sup>Optional</sup> <a name="proxyAddressInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddressInput"></a>

```typescript
public readonly proxyAddressInput: string;
```

- *Type:* string

---

##### `proxyPortInput`<sup>Optional</sup> <a name="proxyPortInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPortInput"></a>

```typescript
public readonly proxyPortInput: number;
```

- *Type:* number

---

##### `proxyTypeInput`<sup>Optional</sup> <a name="proxyTypeInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyTypeInput"></a>

```typescript
public readonly proxyTypeInput: string;
```

- *Type:* string

---

##### `tcpKeepAliveInput`<sup>Optional</sup> <a name="tcpKeepAliveInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAliveInput"></a>

```typescript
public readonly tcpKeepAliveInput: string;
```

- *Type:* string

---

##### `tlsTimeoutInput`<sup>Optional</sup> <a name="tlsTimeoutInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeoutInput"></a>

```typescript
public readonly tlsTimeoutInput: string;
```

- *Type:* string

---

##### `bastionMode`<sup>Required</sup> <a name="bastionMode" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.bastionMode"></a>

```typescript
public readonly bastionMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `caPool`<sup>Required</sup> <a name="caPool" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.caPool"></a>

```typescript
public readonly caPool: string;
```

- *Type:* string

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: string;
```

- *Type:* string

---

##### `disableChunkedEncoding`<sup>Required</sup> <a name="disableChunkedEncoding" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.disableChunkedEncoding"></a>

```typescript
public readonly disableChunkedEncoding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpHostHeader`<sup>Required</sup> <a name="httpHostHeader" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.httpHostHeader"></a>

```typescript
public readonly httpHostHeader: string;
```

- *Type:* string

---

##### `keepAliveConnections`<sup>Required</sup> <a name="keepAliveConnections" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveConnections"></a>

```typescript
public readonly keepAliveConnections: number;
```

- *Type:* number

---

##### `keepAliveTimeout`<sup>Required</sup> <a name="keepAliveTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.keepAliveTimeout"></a>

```typescript
public readonly keepAliveTimeout: string;
```

- *Type:* string

---

##### `noHappyEyeballs`<sup>Required</sup> <a name="noHappyEyeballs" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noHappyEyeballs"></a>

```typescript
public readonly noHappyEyeballs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noTlsVerify`<sup>Required</sup> <a name="noTlsVerify" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.noTlsVerify"></a>

```typescript
public readonly noTlsVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `originServerName`<sup>Required</sup> <a name="originServerName" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.originServerName"></a>

```typescript
public readonly originServerName: string;
```

- *Type:* string

---

##### `proxyAddress`<sup>Required</sup> <a name="proxyAddress" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyAddress"></a>

```typescript
public readonly proxyAddress: string;
```

- *Type:* string

---

##### `proxyPort`<sup>Required</sup> <a name="proxyPort" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyPort"></a>

```typescript
public readonly proxyPort: number;
```

- *Type:* number

---

##### `proxyType`<sup>Required</sup> <a name="proxyType" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.proxyType"></a>

```typescript
public readonly proxyType: string;
```

- *Type:* string

---

##### `tcpKeepAlive`<sup>Required</sup> <a name="tcpKeepAlive" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tcpKeepAlive"></a>

```typescript
public readonly tcpKeepAlive: string;
```

- *Type:* string

---

##### `tlsTimeout`<sup>Required</sup> <a name="tlsTimeout" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.tlsTimeout"></a>

```typescript
public readonly tlsTimeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TunnelConfigConfigOriginRequest;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigOriginRequest">TunnelConfigConfigOriginRequest</a>

---


### TunnelConfigConfigWarpRoutingOutputReference <a name="TunnelConfigConfigWarpRoutingOutputReference" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer"></a>

```typescript
import { tunnelConfig } from '@cdktf/provider-cloudflare'

new tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TunnelConfigConfigWarpRouting;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.tunnelConfig.TunnelConfigConfigWarpRouting">TunnelConfigConfigWarpRouting</a>

---



