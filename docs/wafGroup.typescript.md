# `cloudflare_waf_group`

Refer to the Terraform Registory for docs: [`cloudflare_waf_group`](https://www.terraform.io/docs/providers/cloudflare/r/waf_group).

# `wafGroup` Submodule <a name="`wafGroup` Submodule" id="@cdktf/provider-cloudflare.wafGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafGroup <a name="WafGroup" id="@cdktf/provider-cloudflare.wafGroup.WafGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_group cloudflare_waf_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.Initializer"></a>

```typescript
import { wafGroup } from '@cdktf/provider-cloudflare'

new wafGroup.WafGroup(scope: Construct, id: string, config: WafGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroupConfig">WafGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.wafGroup.WafGroupConfig">WafGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.resetPackageId">resetPackageId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetPackageId` <a name="resetPackageId" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.resetPackageId"></a>

```typescript
public resetPackageId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.isConstruct"></a>

```typescript
import { wafGroup } from '@cdktf/provider-cloudflare'

wafGroup.WafGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.isTerraformElement"></a>

```typescript
import { wafGroup } from '@cdktf/provider-cloudflare'

wafGroup.WafGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.isTerraformResource"></a>

```typescript
import { wafGroup } from '@cdktf/provider-cloudflare'

wafGroup.WafGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.packageIdInput">packageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.packageId">packageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `packageIdInput`<sup>Optional</sup> <a name="packageIdInput" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.packageIdInput"></a>

```typescript
public readonly packageIdInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `packageId`<sup>Required</sup> <a name="packageId" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.packageId"></a>

```typescript
public readonly packageId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.wafGroup.WafGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafGroupConfig <a name="WafGroupConfig" id="@cdktf/provider-cloudflare.wafGroup.WafGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.Initializer"></a>

```typescript
import { wafGroup } from '@cdktf/provider-cloudflare'

const wafGroupConfig: wafGroup.WafGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.groupId">groupId</a></code> | <code>string</code> | **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_group#id WafGroup#id}. |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.mode">mode</a></code> | <code>string</code> | Defaults to `on`. |
| <code><a href="#@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.packageId">packageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_group#package_id WafGroup#package_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

**Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_group#group_id WafGroup#group_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_group#zone_id WafGroup#zone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_group#id WafGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Defaults to `on`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_group#mode WafGroup#mode}

---

##### `packageId`<sup>Optional</sup> <a name="packageId" id="@cdktf/provider-cloudflare.wafGroup.WafGroupConfig.property.packageId"></a>

```typescript
public readonly packageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/waf_group#package_id WafGroup#package_id}.

---



